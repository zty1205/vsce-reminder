import preset1 from './preset-1.config';
import preset2 from './preset-2.config';
import defaultConfig from './default.config';
import { PresetName } from './types';
import { MappingConfigItem } from '../types';

export const getPresetConfig = (name: PresetName) => {
  switch (name) {
    case PresetName.PRESET_1:
      return preset1;
    case PresetName.PRESET_2:
      return preset2;
    case PresetName.DEFAULT:
      return defaultConfig;
    default:
      return null;
  }
};

export const getPresetConfigs = (names: PresetName[] = []) => {
  const configs: MappingConfigItem[] = [];
  const set = new Set<PresetName>(names);
  set.forEach((name) => {
    const config = getPresetConfig(name);
    if (config) {
      configs.push(config);
    }
  });
  return configs;
};
