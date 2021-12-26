import React, { useState } from 'react';
import { Wrapper } from './accordion2.styles';
import { PlusOutlined } from '@ant-design/icons';
import InputComponents from '../../../InputComponents';

const Accordion2 = ({ sections, configuration, handleSetAttribute }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleClickSelect = idx => {
    setSelectedSection(selectedSection === idx ? null : idx);
  };

  if (!sections || sections.length === 0) return null;

  return (
    <>
      {sections.map(
        (
          {
            label,
            selected,
            heading,
            description,
            component: Component,
            inputs,
          },
          i
        ) => (
          <Wrapper key={i} selected={selectedSection === i}>
            <div onClick={() => handleClickSelect(i)}>
              <div>{label}</div>
              <div>{/* Selection State */}</div>
              <div>
                <PlusOutlined
                  style={{
                    transition: `all 0.3s`,
                    transform: selected ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                />
              </div>
            </div>
            <div>
              <div>
                <div>{heading}</div>
                <div>{description}</div>
                <div>
                  {Component ? (
                    <Component />
                  ) : inputs && inputs.length > 0 ? (
                    inputs.map((input, j) => (
                      <InputComponents
                        key={j}
                        {...input}
                        value={configuration?.[input.attribute]}
                        onChange={val =>
                          handleSetAttribute({ [input.attribute]: val })
                        }
                      />
                    ))
                  ) : null}
                </div>
              </div>
            </div>
          </Wrapper>
        )
      )}
    </>
  );
};

export default Accordion2;
