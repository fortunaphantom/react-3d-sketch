import { validate as isUuid } from 'uuid';

const compileAttributesData = (metadataMap = {}) => {
  if (!window.threekitApi || !window.threekitApi.configurator)
    throw new Error('threekitApi not setup');
  return window.threekitApi.configurator
    .getAttributes()
    .reduce((output, attr) => {
      if (!['Asset', 'String'].includes(attr.type)) return output;
      output[attr.name] = {
        type: attr.type,
        label: attr.name,
      };

      if (attr.type === 'String') {
        output[attr.name].values = attr.values.map(val => ({
          id: val.toLowerCase().replace(' ', '-'),
          value: val,
          label: val,
        }));
      } else {
        output[attr.name].values = attr.values.map(val => {
          const opt = {
            id: window.threekitApi.player.sceneGraph.nodes[val.assetId].name
              .toLowerCase()
              .replace(' ', '-'),
            value: val.assetId,
            label: window.threekitApi.player.sceneGraph.nodes[val.assetId].name,
          };

          const dependency = new RegExp(/^_dependency/);
          const re = new RegExp(/^_/);

          window.threekitApi.player.sceneGraph.nodes[
            val.assetId
          ].configurator.metadata.forEach(metadata => {
            if (
              dependency.test(metadata.name) &&
              JSON.parse(metadata.defaultValue)
            )
              opt.dependencies = opt.dependencies
                ? opt.dependencies.push(JSON.parse(metadata.defaultValue))
                : [JSON.parse(metadata.defaultValue)];
            else if (metadata.name in metadataMap)
              opt[metadataMap[metadata.name]] = metadata.defaultValue;
            else if (re.test(metadata.name))
              opt[metadata.name.substring(1, metadata.name.length)] =
                metadata.defaultValue;
          });

          return opt;
        });
      }

      return output;
    }, {});
};

export const getConfigurationOutput = () => {
  if (!window.threekitApi) return;
  const configuration = window.threekitApi.configurator.getConfiguration();
  const attributes = compileAttributesData();

  return Object.entries(configuration).reduce((output, [key, val]) => {
    if (!(key in attributes)) return output;

    const selected = attributes[key].values.find(
      el => (typeof val === 'object' ? val.assetId : val) === el.value
    );

    output[key] = {
      type: attributes[key].type,
      value: val,
      label: selected?.label,
      sku: selected?.sku,
    };
    return output;
  }, {});
};

/**
 * @desc To initialize the player we have to pass in an object
 *    with the the domain speicfic auth token, the assetId
 *    for the asset we're hoping to embed as well as the html
 *    div where the player is to be embedded.
 * @param object $initialSettings - object passed directly to threekitPlayer()
 * @return Promise - success or failure
 */
const initializePlayer = initialSettings => {
  return new Promise(async (resolve, reject) => {
    if (!window.threekitPlayer)
      reject('window.threekitPlayer object is missing threekitPlayer api');
    if (!initialSettings.authToken)
      reject('intialSettings object is missing the authToken');
    if (!initialSettings.assetId)
      reject('intialSettings object is missing the assetId');
    if (!initialSettings.orgId)
      reject('intialSettings object is missing the orgId');
    if (!initialSettings.el) reject('intialSettings object is missing the el');

    const threekitConfg = {
      el: initialSettings.el,
      authToken: initialSettings.authToken,
      assetId: initialSettings.assetId,
      orgId: initialSettings.orgId,
    };

    const threekitApi = await window.threekitPlayer({
      //   authToken: '01234567-89ab-cdef-0123-456789abcdef',
      //   el: document.getElementById('player-root'),
      //   stageId: '27b9cd7e-2bb2-4a18-b788-160743eb4b33',
      //   assetId: 'e12a45f7-8b39-cd06-e12a-45f78b39cd06',
      //   showConfigurator: true,
      //   showAR: true,
      //   initialConfiguration: {},
      //   showShare: true,
      ...threekitConfg,
    });
    if (!window.threekitPlayer) reject('Error initializing player');

    /***** API SETUP START ***************************************************************/
    //  Enables access to the threekit store api
    threekitApi.enableApi('store');

    //  Enables access to the threekit player api
    const player = threekitApi.enableApi('player');
    window.threekitApi = {
      api: threekitApi,
      player,
      configurator: player.getConfigurator(),
    };
    /***** API SETUP END *****************************************************************/

    /***** PLAYER TOOLS START ************************************************************/
    //  The functional interactions with the player can be removed
    //  either individually or as an array

    //  threekitApi.tools.removeTool('zoom');

    //  threekitApi.tools.removeTool(['pan', 'zoom']);
    /***** PLAYER TOOLS END **************************************************************/

    /***** PLAYER LIFECYCLE LISTENSERS START *********************************************/
    //  We add listeners to be triggered during the player's
    //  lifecycle events: PRELOADED, LOADED and RENDERED

    threekitApi.on(threekitApi.scene.PHASES.PRELOADED, () => {
      //    Assigns default configurator to window object
      window.threekitApi.configurator = threekitApi.player.getConfigurator();
      initialSettings.onPreload
        ? initialSettings.onPreload()
        : console.log('Player has preloaded data');
    });

    // threekitApi.on(threekitApi.scene.PHASES.LOADED, () => {
    //  initialSettings.onLoad ? initialSettings.onLoad() : console.log('Player has loaded all data');
    // });

    //  threekitApi.on(threekitApi.scene.PHASES.RENDERED, () => {
    //      initialSettings.onRender ? initialSettings.onRender() : console.log('Player has rendered the default asset')
    //  });
    /***** PLAYER LIFECYCLE LISTENSERS END ***********************************************/

    resolve(true);
  });
};

const setConfiguration = config => {
  if (!config || !window.threekitApi) return;

  if (typeof config !== 'object') return;

  const updateConfig = Object.entries(config).reduce(
    (output, [attribute, value]) =>
      Object.assign(output, {
        [attribute]: isUuid(value) ? { assetId: value } : value,
      }),
    {}
  );

  console.log(updateConfig);

  window.threekitApi.configurator.setConfiguration(updateConfig);
};

const getConfiguration = () => {
  if (!window.threekitApi) return;
  return window.threekitApi.configurator.getConfiguration();
};

export default {
  initializePlayer,
  compileAttributesData,
  setConfiguration,
  getConfiguration,
  getConfigurationOutput,
};
