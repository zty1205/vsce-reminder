import { MappingConfigItem } from '../types';

const projectConfig: MappingConfigItem = {
  mapping: {
    'font-size': {
      '60px': [
        {
          mapping: 'var(--large_text_1)',
          description: '大文本 1'
        }
      ],
      '40px': [
        {
          mapping: 'var(--large_text_2)',
          description: '大文本 2'
        },
        {
          mapping: 'var(--custom_2)',
          description: '自定义 2'
        }
      ],
      '34px': [
        {
          mapping: 'var(--headline_1)',
          description: '标题 1'
        },
        {
          mapping: 'var(--headline_2)',
          description: '标题 2'
        }
      ],
      '28px': [
        {
          mapping: 'var(--large_text_3)',
          description: '大文本 3'
        },
        {
          mapping: 'var(--headline_3)',
          description: '标题 3'
        }
      ],
      '24px': [
        {
          mapping: 'var(--headline_4)',
          description: '标题 4'
        },
        {
          mapping: 'var(--subtitle_1)',
          description: '副标题 1'
        }
      ],
      '20px': [
        {
          mapping: 'var(--custom_1)',
          description: '自定义 1'
        }
      ],
      '18px': [
        {
          mapping: 'var(--subtitle_2)',
          description: '副标题 2'
        }
      ],
      '16px': [
        {
          mapping: 'var(--subtitle_3)',
          description: '副标题 3'
        },
        {
          mapping: 'var(--body_1)',
          description: '正文 1'
        }
      ],
      '14px': [
        {
          mapping: 'var(--subtitle_4)',
          description: '副标题 4'
        },
        {
          mapping: 'var(--body_2)',
          description: '正文 2'
        }
      ],
      '12px': [
        {
          mapping: 'var(--body_3)',
          description: '正文 3'
        },
        {
          mapping: 'var(--caption_1)',
          description: '说明文字 1'
        }
      ],
      '10px': [
        {
          mapping: 'var(--caption_2)',
          description: '说明文字 2'
        }
      ]
    }
  }
};

export default projectConfig;
