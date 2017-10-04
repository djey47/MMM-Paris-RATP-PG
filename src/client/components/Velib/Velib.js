/* @flow */

import React, { PureComponent } from 'react';

import type { ModuleConfiguration } from '../../../types/Configuration';

type PropsType = {
  entries: Object,
  config: ModuleConfiguration,
};

type StateType = {};

/**
 * List of traffic information items
 */
class Velib extends PureComponent {
  props: PropsType;
  state: StateType;

  static defaultProps = {
    entries: {},
  }

  render() {
    const { entries } = this.props;
    return (
      <ul className="Velib">
        {Object.keys(entries).map((entryKey) => {
          return <div key={entryKey}>Velib Item</div>;
        })}
      </ul>
    );
  }
}

export default Velib;
