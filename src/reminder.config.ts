import { MappingConfigItem } from './types';

/**
 * 配置文件
 */
const projectConfig: MappingConfigItem = {
  // 映射对象]
  mapping: {
    zty: {
      hello: [
        {
          mapping: 'world',
          description: '彩蛋',
        },
      ],
    },
  },
};

export default projectConfig;
