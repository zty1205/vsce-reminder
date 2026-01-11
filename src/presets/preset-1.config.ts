import { MappingConfigItem } from '../types';

const projectConfig: MappingConfigItem = {
  mapping: {
    'border-radius': {
      '0px': [
        {
          mapping: 'var(--rounded-none)',
          description: '无圆角'
        }
      ],
      '2px': [
        {
          mapping: 'var(--rounded-mini)',
          description: '迷你圆角'
        }
      ],
      '4px': [
        {
          mapping: 'var(--rounded-small)',
          description: '小圆角'
        }
      ],
      '8px': [
        {
          mapping: 'var(--rounded)',
          description: '默认圆角'
        },
        {
          mapping: 'var(--rounded-medium)',
          description: '中等圆角'
        }
      ],
      '12px': [
        {
          mapping: 'var(--rounded-large)',
          description: '大圆角'
        }
      ],
      '9999px': [
        {
          mapping: 'var(--rounded-pill)',
          description: '最大圆角'
        }
      ],
      '50%': [
        {
          mapping: 'var(--circle)',
          description: '圆形'
        }
      ]
    },
    'box-shadow': {
      '0px 2px 6px 0px #363C540F, 0px 1px 3px 0px #363C5408': [
        {
          mapping: 'var(--shadow-small)',
          description: '小阴影'
        }
      ],
      '0px 4px 10px 0px #363C5414, 0px 2px 4px 0px #363C540A': [
        {
          mapping: 'var(--shadow-medium)',
          description: '中等阴影'
        }
      ],
      '0px 6px 24px 0px #363C5414, 0px 4px 10px 0px #27303905': [
        {
          mapping: 'var(--shadow-large)',
          description: '大阴影'
        }
      ]
    },
    color: {
      '#ffece8': [
        {
          mapping: 'var(--red-1)',
          description: 'red 1\nCedar组件库'
        },
        {
          mapping: 'var(--danger-1)',
          description: 'danger 1\nCedar组件库'
        }
      ],
      '#fdcdc5': [
        {
          mapping: 'var(--red-2)',
          description: 'red 2\nCedar组件库'
        },
        {
          mapping: 'var(--danger-2)',
          description: 'danger 2\nCedar组件库'
        }
      ],
      '#fbaca3': [
        {
          mapping: 'var(--red-3)',
          description: 'red 3\nCedar组件库'
        },
        {
          mapping: 'var(--danger-3)',
          description: 'danger 3\nCedar组件库'
        }
      ],
      '#f98981': [
        {
          mapping: 'var(--red-4)',
          description: 'red 4\nCedar组件库'
        },
        {
          mapping: 'var(--danger-4)',
          description: 'danger 4\nCedar组件库'
        }
      ],
      '#f76560': [
        {
          mapping: 'var(--red-5)',
          description: 'red 5\nCedar组件库'
        },
        {
          mapping: 'var(--danger-5)',
          description: 'danger 5\nCedar组件库'
        }
      ],
      '#f53f3f': [
        {
          mapping: 'var(--red-6)',
          description: 'red 6\nCedar组件库'
        },
        {
          mapping: 'var(--danger-6)',
          description: 'danger 6\nCedar组件库'
        }
      ],
      '#cb272d': [
        {
          mapping: 'var(--red-7)',
          description: 'red 7\nCedar组件库'
        },
        {
          mapping: 'var(--danger-7)',
          description: 'danger 7\nCedar组件库'
        }
      ],
      '#a1151e': [
        {
          mapping: 'var(--red-8)',
          description: 'red 8\nCedar组件库'
        },
        {
          mapping: 'var(--danger-8)',
          description: 'danger 8\nCedar组件库'
        }
      ],
      '#770813': [
        {
          mapping: 'var(--red-9)',
          description: 'red 9\nCedar组件库'
        },
        {
          mapping: 'var(--danger-9)',
          description: 'danger 9\nCedar组件库'
        }
      ],
      '#4d000a': [
        {
          mapping: 'var(--red-10)',
          description: 'red 10\nCedar组件库'
        },
        {
          mapping: 'var(--danger-10)',
          description: 'danger 10\nCedar组件库'
        }
      ],
      '#fff3e8': [
        {
          mapping: 'var(--orangered-1)',
          description: 'orangered 1\nCedar组件库'
        }
      ],
      '#fdddc3': [
        {
          mapping: 'var(--orangered-2)',
          description: 'orangered 2\nCedar组件库'
        }
      ],
      '#fcc59f': [
        {
          mapping: 'var(--orangered-3)',
          description: 'orangered 3\nCedar组件库'
        }
      ],
      '#faac7b': [
        {
          mapping: 'var(--orangered-4)',
          description: 'orangered 4\nCedar组件库'
        }
      ],
      '#f99057': [
        {
          mapping: 'var(--orangered-5)',
          description: 'orangered 5\nCedar组件库'
        }
      ],
      '#f77234': [
        {
          mapping: 'var(--orangered-6)',
          description: 'orangered 6\nCedar组件库'
        }
      ],
      '#cc5120': [
        {
          mapping: 'var(--orangered-7)',
          description: 'orangered 7\nCedar组件库'
        }
      ],
      '#a23511': [
        {
          mapping: 'var(--orangered-8)',
          description: 'orangered 8\nCedar组件库'
        }
      ],
      '#771f06': [
        {
          mapping: 'var(--orangered-9)',
          description: 'orangered 9\nCedar组件库'
        }
      ],
      '#4d0e00': [
        {
          mapping: 'var(--orangered-10)',
          description: 'orangered 10\nCedar组件库'
        }
      ],
      '#fff7e8': [
        {
          mapping: 'var(--orange-1)',
          description: 'orange 1\nCedar组件库'
        },
        {
          mapping: 'var(--warning-1)',
          description: 'warning 1\nCedar组件库'
        }
      ],
      '#ffe4ba': [
        {
          mapping: 'var(--orange-2)',
          description: 'orange 2\nCedar组件库'
        },
        {
          mapping: 'var(--warning-2)',
          description: 'warning 2\nCedar组件库'
        }
      ],
      '#ffcf8b': [
        {
          mapping: 'var(--orange-3)',
          description: 'orange 3\nCedar组件库'
        },
        {
          mapping: 'var(--warning-3)',
          description: 'warning 3\nCedar组件库'
        }
      ],
      '#ffb65d': [
        {
          mapping: 'var(--orange-4)',
          description: 'orange 4\nCedar组件库'
        },
        {
          mapping: 'var(--warning-4)',
          description: 'warning 4\nCedar组件库'
        }
      ],
      '#ff9a2e': [
        {
          mapping: 'var(--orange-5)',
          description: 'orange 5\nCedar组件库'
        },
        {
          mapping: 'var(--warning-5)',
          description: 'warning 5\nCedar组件库'
        }
      ],
      '#ff7d00': [
        {
          mapping: 'var(--orange-6)',
          description: 'orange 6\nCedar组件库'
        },
        {
          mapping: 'var(--warning-6)',
          description: 'warning 6\nCedar组件库'
        }
      ],
      '#d25f00': [
        {
          mapping: 'var(--orange-7)',
          description: 'orange 7\nCedar组件库'
        },
        {
          mapping: 'var(--warning-7)',
          description: 'warning 7\nCedar组件库'
        }
      ],
      '#a64500': [
        {
          mapping: 'var(--orange-8)',
          description: 'orange 8\nCedar组件库'
        },
        {
          mapping: 'var(--warning-8)',
          description: 'warning 8\nCedar组件库'
        }
      ],
      '#792e00': [
        {
          mapping: 'var(--orange-9)',
          description: 'orange 9\nCedar组件库'
        },
        {
          mapping: 'var(--warning-9)',
          description: 'warning 9\nCedar组件库'
        }
      ],
      '#4d1b00': [
        {
          mapping: 'var(--orange-10)',
          description: 'orange 10\nCedar组件库'
        },
        {
          mapping: 'var(--warning-10)',
          description: 'warning 10\nCedar组件库'
        }
      ],
      '#fffce8': [
        {
          mapping: 'var(--gold-1)',
          description: 'gold 1\nCedar组件库'
        }
      ],
      '#fdf4bf': [
        {
          mapping: 'var(--gold-2)',
          description: 'gold 2\nCedar组件库'
        }
      ],
      '#fce996': [
        {
          mapping: 'var(--gold-3)',
          description: 'gold 3\nCedar组件库'
        }
      ],
      '#fadc6d': [
        {
          mapping: 'var(--gold-4)',
          description: 'gold 4\nCedar组件库'
        }
      ],
      '#f9cc45': [
        {
          mapping: 'var(--gold-5)',
          description: 'gold 5\nCedar组件库'
        }
      ],
      '#f7ba1e': [
        {
          mapping: 'var(--gold-6)',
          description: 'gold 6\nCedar组件库'
        }
      ],
      '#cc9213': [
        {
          mapping: 'var(--gold-7)',
          description: 'gold 7\nCedar组件库'
        }
      ],
      '#a26d0a': [
        {
          mapping: 'var(--gold-8)',
          description: 'gold 8\nCedar组件库'
        }
      ],
      '#774b04': [
        {
          mapping: 'var(--gold-9)',
          description: 'gold 9\nCedar组件库'
        }
      ],
      '#4d2d00': [
        {
          mapping: 'var(--gold-10)',
          description: 'gold 10\nCedar组件库'
        }
      ],
      '#feffe8': [
        {
          mapping: 'var(--yellow-1)',
          description: 'yellow 1\nCedar组件库'
        }
      ],
      '#fefebe': [
        {
          mapping: 'var(--yellow-2)',
          description: 'yellow 2\nCedar组件库'
        }
      ],
      '#fdfa94': [
        {
          mapping: 'var(--yellow-3)',
          description: 'yellow 3\nCedar组件库'
        }
      ],
      '#fcf26b': [
        {
          mapping: 'var(--yellow-4)',
          description: 'yellow 4\nCedar组件库'
        }
      ],
      '#fbe842': [
        {
          mapping: 'var(--yellow-5)',
          description: 'yellow 5\nCedar组件库'
        }
      ],
      '#fadc19': [
        {
          mapping: 'var(--yellow-6)',
          description: 'yellow 6\nCedar组件库'
        }
      ],
      '#cfaf0f': [
        {
          mapping: 'var(--yellow-7)',
          description: 'yellow 7\nCedar组件库'
        }
      ],
      '#a38408': [
        {
          mapping: 'var(--yellow-8)',
          description: 'yellow 8\nCedar组件库'
        }
      ],
      '#785d03': [
        {
          mapping: 'var(--yellow-9)',
          description: 'yellow 9\nCedar组件库'
        }
      ],
      '#4d3800': [
        {
          mapping: 'var(--yellow-10)',
          description: 'yellow 10\nCedar组件库'
        }
      ],
      '#fcffe8': [
        {
          mapping: 'var(--lime-1)',
          description: 'lime 1\nCedar组件库'
        }
      ],
      '#edf8bb': [
        {
          mapping: 'var(--lime-2)',
          description: 'lime 2\nCedar组件库'
        }
      ],
      '#dcf190': [
        {
          mapping: 'var(--lime-3)',
          description: 'lime 3\nCedar组件库'
        }
      ],
      '#c9e968': [
        {
          mapping: 'var(--lime-4)',
          description: 'lime 4\nCedar组件库'
        }
      ],
      '#b5e241': [
        {
          mapping: 'var(--lime-5)',
          description: 'lime 5\nCedar组件库'
        }
      ],
      '#9fdb1d': [
        {
          mapping: 'var(--lime-6)',
          description: 'lime 6\nCedar组件库'
        }
      ],
      '#7eb712': [
        {
          mapping: 'var(--lime-7)',
          description: 'lime 7\nCedar组件库'
        }
      ],
      '#5f940a': [
        {
          mapping: 'var(--lime-8)',
          description: 'lime 8\nCedar组件库'
        }
      ],
      '#437004': [
        {
          mapping: 'var(--lime-9)',
          description: 'lime 9\nCedar组件库'
        }
      ],
      '#2a4d00': [
        {
          mapping: 'var(--lime-10)',
          description: 'lime 10\nCedar组件库'
        }
      ],
      '#e8ffea': [
        {
          mapping: 'var(--green-1)',
          description: 'green 1\nCedar组件库'
        },
        {
          mapping: 'var(--success-1)',
          description: 'success 1\nCedar组件库'
        }
      ],
      '#aff0b5': [
        {
          mapping: 'var(--green-2)',
          description: 'green 2\nCedar组件库'
        },
        {
          mapping: 'var(--success-2)',
          description: 'success 2\nCedar组件库'
        }
      ],
      '#7be188': [
        {
          mapping: 'var(--green-3)',
          description: 'green 3\nCedar组件库'
        },
        {
          mapping: 'var(--success-3)',
          description: 'success 3\nCedar组件库'
        }
      ],
      '#4cd263': [
        {
          mapping: 'var(--green-4)',
          description: 'green 4\nCedar组件库'
        },
        {
          mapping: 'var(--success-4)',
          description: 'success 4\nCedar组件库'
        }
      ],
      '#23c343': [
        {
          mapping: 'var(--green-5)',
          description: 'green 5\nCedar组件库'
        },
        {
          mapping: 'var(--success-5)',
          description: 'success 5\nCedar组件库'
        }
      ],
      '#00b42a': [
        {
          mapping: 'var(--green-6)',
          description: 'green 6\nCedar组件库'
        },
        {
          mapping: 'var(--success-6)',
          description: 'success 6\nCedar组件库'
        }
      ],
      '#009a29': [
        {
          mapping: 'var(--green-7)',
          description: 'green 7\nCedar组件库'
        },
        {
          mapping: 'var(--success-7)',
          description: 'success 7\nCedar组件库'
        }
      ],
      '#008026': [
        {
          mapping: 'var(--green-8)',
          description: 'green 8\nCedar组件库'
        },
        {
          mapping: 'var(--success-8)',
          description: 'success 8\nCedar组件库'
        }
      ],
      '#006622': [
        {
          mapping: 'var(--green-9)',
          description: 'green 9\nCedar组件库'
        },
        {
          mapping: 'var(--success-9)',
          description: 'success 9\nCedar组件库'
        }
      ],
      '#004d1c': [
        {
          mapping: 'var(--green-10)',
          description: 'green 10\nCedar组件库'
        },
        {
          mapping: 'var(--success-10)',
          description: 'success 10\nCedar组件库'
        }
      ],
      '#e8fffb': [
        {
          mapping: 'var(--cyan-1)',
          description: 'cyan 1\nCedar组件库'
        }
      ],
      '#b7f4ec': [
        {
          mapping: 'var(--cyan-2)',
          description: 'cyan 2\nCedar组件库'
        }
      ],
      '#89e9e0': [
        {
          mapping: 'var(--cyan-3)',
          description: 'cyan 3\nCedar组件库'
        }
      ],
      '#5edfd6': [
        {
          mapping: 'var(--cyan-4)',
          description: 'cyan 4\nCedar组件库'
        }
      ],
      '#37d4cf': [
        {
          mapping: 'var(--cyan-5)',
          description: 'cyan 5\nCedar组件库'
        }
      ],
      '#14c9c9': [
        {
          mapping: 'var(--cyan-6)',
          description: 'cyan 6\nCedar组件库'
        }
      ],
      '#0da5aa': [
        {
          mapping: 'var(--cyan-7)',
          description: 'cyan 7\nCedar组件库'
        }
      ],
      '#07828b': [
        {
          mapping: 'var(--cyan-8)',
          description: 'cyan 8\nCedar组件库'
        }
      ],
      '#03616c': [
        {
          mapping: 'var(--cyan-9)',
          description: 'cyan 9\nCedar组件库'
        }
      ],
      '#00424d': [
        {
          mapping: 'var(--cyan-10)',
          description: 'cyan 10\nCedar组件库'
        }
      ],
      '#e8f7ff': [
        {
          mapping: 'var(--blue-1)',
          description: 'blue 1\nCedar组件库'
        }
      ],
      '#c3e7fe': [
        {
          mapping: 'var(--blue-2)',
          description: 'blue 2\nCedar组件库'
        }
      ],
      '#9fd4fd': [
        {
          mapping: 'var(--blue-3)',
          description: 'blue 3\nCedar组件库'
        }
      ],
      '#7bc0fc': [
        {
          mapping: 'var(--blue-4)',
          description: 'blue 4\nCedar组件库'
        }
      ],
      '#57a9fb': [
        {
          mapping: 'var(--blue-5)',
          description: 'blue 5\nCedar组件库'
        }
      ],
      '#3491fa': [
        {
          mapping: 'var(--blue-6)',
          description: 'blue 6\nCedar组件库'
        }
      ],
      '#206ccf': [
        {
          mapping: 'var(--blue-7)',
          description: 'blue 7\nCedar组件库'
        }
      ],
      '#114ba3': [
        {
          mapping: 'var(--blue-8)',
          description: 'blue 8\nCedar组件库'
        }
      ],
      '#063078': [
        {
          mapping: 'var(--blue-9)',
          description: 'blue 9\nCedar组件库'
        }
      ],
      '#001a4d': [
        {
          mapping: 'var(--blue-10)',
          description: 'blue 10\nCedar组件库'
        }
      ],
      '#e8f3ff': [
        {
          mapping: 'var(--arcoblue-1)',
          description: 'arcoblue 1\nCedar组件库'
        },
        {
          mapping: 'var(--primary-1)',
          description: 'primary 1\nCedar组件库'
        },
        {
          mapping: 'var(--link-1)',
          description: 'link 1\nCedar组件库'
        }
      ],
      '#bedaff': [
        {
          mapping: 'var(--arcoblue-2)',
          description: 'arcoblue 2\nCedar组件库'
        },
        {
          mapping: 'var(--primary-2)',
          description: 'primary 2\nCedar组件库'
        },
        {
          mapping: 'var(--link-2)',
          description: 'link 2\nCedar组件库'
        }
      ],
      '#94bfff': [
        {
          mapping: 'var(--arcoblue-3)',
          description: 'arcoblue 3\nCedar组件库'
        },
        {
          mapping: 'var(--primary-3)',
          description: 'primary 3\nCedar组件库'
        },
        {
          mapping: 'var(--link-3)',
          description: 'link 3\nCedar组件库'
        }
      ],
      '#6aa1ff': [
        {
          mapping: 'var(--arcoblue-4)',
          description: 'arcoblue 4\nCedar组件库'
        },
        {
          mapping: 'var(--primary-4)',
          description: 'primary 4\nCedar组件库'
        },
        {
          mapping: 'var(--link-4)',
          description: 'link 4\nCedar组件库'
        }
      ],
      '#4080ff': [
        {
          mapping: 'var(--arcoblue-5)',
          description: 'arcoblue 5\nCedar组件库'
        },
        {
          mapping: 'var(--primary-5)',
          description: 'primary 5\nCedar组件库'
        },
        {
          mapping: 'var(--link-5)',
          description: 'link 5\nCedar组件库'
        }
      ],
      '#165dff': [
        {
          mapping: 'var(--arcoblue-6)',
          description: 'arcoblue 6\nCedar组件库'
        },
        {
          mapping: 'var(--primary-6)',
          description: 'primary 6\nCedar组件库'
        },
        {
          mapping: 'var(--link-6)',
          description: 'link 6\nCedar组件库'
        }
      ],
      '#0e42d2': [
        {
          mapping: 'var(--arcoblue-7)',
          description: 'arcoblue 7\nCedar组件库'
        },
        {
          mapping: 'var(--primary-7)',
          description: 'primary 7\nCedar组件库'
        },
        {
          mapping: 'var(--link-7)',
          description: 'link 7\nCedar组件库'
        }
      ],
      '#072ca6': [
        {
          mapping: 'var(--arcoblue-8)',
          description: 'arcoblue 8\nCedar组件库'
        },
        {
          mapping: 'var(--primary-8)',
          description: 'primary 8\nCedar组件库'
        },
        {
          mapping: 'var(--link-8)',
          description: 'link 8\nCedar组件库'
        }
      ],
      '#031a79': [
        {
          mapping: 'var(--arcoblue-9)',
          description: 'arcoblue 9\nCedar组件库'
        },
        {
          mapping: 'var(--primary-9)',
          description: 'primary 9\nCedar组件库'
        },
        {
          mapping: 'var(--link-9)',
          description: 'link 9\nCedar组件库'
        }
      ],
      '#000d4d': [
        {
          mapping: 'var(--arcoblue-10)',
          description: 'arcoblue 10\nCedar组件库'
        },
        {
          mapping: 'var(--primary-10)',
          description: 'primary 10\nCedar组件库'
        },
        {
          mapping: 'var(--link-10)',
          description: 'link 10\nCedar组件库'
        }
      ],
      '#f5e8ff': [
        {
          mapping: 'var(--purple-1)',
          description: 'purple 1\nCedar组件库'
        }
      ],
      '#ddbef6': [
        {
          mapping: 'var(--purple-2)',
          description: 'purple 2\nCedar组件库'
        }
      ],
      '#c396ed': [
        {
          mapping: 'var(--purple-3)',
          description: 'purple 3\nCedar组件库'
        }
      ],
      '#a871e3': [
        {
          mapping: 'var(--purple-4)',
          description: 'purple 4\nCedar组件库'
        }
      ],
      '#8d4eda': [
        {
          mapping: 'var(--purple-5)',
          description: 'purple 5\nCedar组件库'
        }
      ],
      '#722ed1': [
        {
          mapping: 'var(--purple-6)',
          description: 'purple 6\nCedar组件库'
        }
      ],
      '#551db0': [
        {
          mapping: 'var(--purple-7)',
          description: 'purple 7\nCedar组件库'
        }
      ],
      '#3c108f': [
        {
          mapping: 'var(--purple-8)',
          description: 'purple 8\nCedar组件库'
        }
      ],
      '#27066e': [
        {
          mapping: 'var(--purple-9)',
          description: 'purple 9\nCedar组件库'
        }
      ],
      '#16004d': [
        {
          mapping: 'var(--purple-10)',
          description: 'purple 10\nCedar组件库'
        }
      ],
      '#ffe8fb': [
        {
          mapping: 'var(--pinkpurple-1)',
          description: 'pinkpurple 1\nCedar组件库'
        }
      ],
      '#f7baef': [
        {
          mapping: 'var(--pinkpurple-2)',
          description: 'pinkpurple 2\nCedar组件库'
        }
      ],
      '#f08ee6': [
        {
          mapping: 'var(--pinkpurple-3)',
          description: 'pinkpurple 3\nCedar组件库'
        }
      ],
      '#e865df': [
        {
          mapping: 'var(--pinkpurple-4)',
          description: 'pinkpurple 4\nCedar组件库'
        }
      ],
      '#e13edb': [
        {
          mapping: 'var(--pinkpurple-5)',
          description: 'pinkpurple 5\nCedar组件库'
        }
      ],
      '#d91ad9': [
        {
          mapping: 'var(--pinkpurple-6)',
          description: 'pinkpurple 6\nCedar组件库'
        }
      ],
      '#b010b6': [
        {
          mapping: 'var(--pinkpurple-7)',
          description: 'pinkpurple 7\nCedar组件库'
        }
      ],
      '#8a0993': [
        {
          mapping: 'var(--pinkpurple-8)',
          description: 'pinkpurple 8\nCedar组件库'
        }
      ],
      '#650370': [
        {
          mapping: 'var(--pinkpurple-9)',
          description: 'pinkpurple 9\nCedar组件库'
        }
      ],
      '#42004d': [
        {
          mapping: 'var(--pinkpurple-10)',
          description: 'pinkpurple 10\nCedar组件库'
        }
      ],
      '#ffe8f1': [
        {
          mapping: 'var(--magenta-1)',
          description: 'magenta 1\nCedar组件库'
        }
      ],
      '#fdc2db': [
        {
          mapping: 'var(--magenta-2)',
          description: 'magenta 2\nCedar组件库'
        }
      ],
      '#fb9dc7': [
        {
          mapping: 'var(--magenta-3)',
          description: 'magenta 3\nCedar组件库'
        }
      ],
      '#f979b7': [
        {
          mapping: 'var(--magenta-4)',
          description: 'magenta 4\nCedar组件库'
        }
      ],
      '#f754a8': [
        {
          mapping: 'var(--magenta-5)',
          description: 'magenta 5\nCedar组件库'
        }
      ],
      '#f5319d': [
        {
          mapping: 'var(--magenta-6)',
          description: 'magenta 6\nCedar组件库'
        }
      ],
      '#cb1e83': [
        {
          mapping: 'var(--magenta-7)',
          description: 'magenta 7\nCedar组件库'
        }
      ],
      '#a11069': [
        {
          mapping: 'var(--magenta-8)',
          description: 'magenta 8\nCedar组件库'
        }
      ],
      '#77064f': [
        {
          mapping: 'var(--magenta-9)',
          description: 'magenta 9\nCedar组件库'
        }
      ],
      '#4d0034': [
        {
          mapping: 'var(--magenta-10)',
          description: 'magenta 10\nCedar组件库'
        }
      ],
      '#f7f8fa': [
        {
          mapping: 'var(--gray-1)',
          description: 'gray 1\nCedar组件库'
        }
      ],
      '#f2f3f5': [
        {
          mapping: 'var(--gray-2)',
          description: 'gray 2\nCedar组件库'
        }
      ],
      '#e5e6eb': [
        {
          mapping: 'var(--gray-3)',
          description: 'gray 3\nCedar组件库'
        }
      ],
      '#c9cdd4': [
        {
          mapping: 'var(--gray-4)',
          description: 'gray 4\nCedar组件库'
        }
      ],
      '#a9aeb8': [
        {
          mapping: 'var(--gray-5)',
          description: 'gray 5\nCedar组件库'
        }
      ],
      '#86909c': [
        {
          mapping: 'var(--gray-6)',
          description: 'gray 6\nCedar组件库'
        }
      ],
      '#6b7785': [
        {
          mapping: 'var(--gray-7)',
          description: 'gray 7\nCedar组件库'
        }
      ],
      '#4e5969': [
        {
          mapping: 'var(--gray-8)',
          description: 'gray 8\nCedar组件库'
        }
      ],
      '#272e3b': [
        {
          mapping: 'var(--gray-9)',
          description: 'gray 9\nCedar组件库'
        }
      ],
      '#1d2129': [
        {
          mapping: 'var(--gray-10)',
          description: 'gray 10\nCedar组件库'
        }
      ],
      '#ffffff': [
        {
          mapping: 'var(--color-white)',
          description: 'color white\nCedar组件库'
        },
        {
          mapping: 'var(--color-menu-light-bg)',
          description: 'color menu light bg\nCedar组件库'
        }
      ],
      '#000000': [
        {
          mapping: 'var(--color-black)',
          description: 'color black\nCedar组件库'
        }
      ],
      '#fff': [
        {
          mapping: 'var(--color-bg-1)',
          description: 'color bg 1\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-2)',
          description: 'color bg 2\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-3)',
          description: 'color bg 3\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-4)',
          description: 'color bg 4\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-5)',
          description: 'color bg 5\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-popup)',
          description: 'color bg popup\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-white)',
          description: 'color bg white\nCedar组件库'
        }
      ],
      '#232324': [
        {
          mapping: 'var(--color-menu-dark-bg)',
          description: 'color menu dark bg\nCedar组件库'
        }
      ]
    },
    'background-color': {
      '#ffece8': [
        {
          mapping: 'var(--red-1)',
          description: 'red 1\nCedar组件库'
        },
        {
          mapping: 'var(--danger-1)',
          description: 'danger 1\nCedar组件库'
        }
      ],
      '#fdcdc5': [
        {
          mapping: 'var(--red-2)',
          description: 'red 2\nCedar组件库'
        },
        {
          mapping: 'var(--danger-2)',
          description: 'danger 2\nCedar组件库'
        }
      ],
      '#fbaca3': [
        {
          mapping: 'var(--red-3)',
          description: 'red 3\nCedar组件库'
        },
        {
          mapping: 'var(--danger-3)',
          description: 'danger 3\nCedar组件库'
        }
      ],
      '#f98981': [
        {
          mapping: 'var(--red-4)',
          description: 'red 4\nCedar组件库'
        },
        {
          mapping: 'var(--danger-4)',
          description: 'danger 4\nCedar组件库'
        }
      ],
      '#f76560': [
        {
          mapping: 'var(--red-5)',
          description: 'red 5\nCedar组件库'
        },
        {
          mapping: 'var(--danger-5)',
          description: 'danger 5\nCedar组件库'
        }
      ],
      '#f53f3f': [
        {
          mapping: 'var(--red-6)',
          description: 'red 6\nCedar组件库'
        },
        {
          mapping: 'var(--danger-6)',
          description: 'danger 6\nCedar组件库'
        }
      ],
      '#cb272d': [
        {
          mapping: 'var(--red-7)',
          description: 'red 7\nCedar组件库'
        },
        {
          mapping: 'var(--danger-7)',
          description: 'danger 7\nCedar组件库'
        }
      ],
      '#a1151e': [
        {
          mapping: 'var(--red-8)',
          description: 'red 8\nCedar组件库'
        },
        {
          mapping: 'var(--danger-8)',
          description: 'danger 8\nCedar组件库'
        }
      ],
      '#770813': [
        {
          mapping: 'var(--red-9)',
          description: 'red 9\nCedar组件库'
        },
        {
          mapping: 'var(--danger-9)',
          description: 'danger 9\nCedar组件库'
        }
      ],
      '#4d000a': [
        {
          mapping: 'var(--red-10)',
          description: 'red 10\nCedar组件库'
        },
        {
          mapping: 'var(--danger-10)',
          description: 'danger 10\nCedar组件库'
        }
      ],
      '#fff3e8': [
        {
          mapping: 'var(--orangered-1)',
          description: 'orangered 1\nCedar组件库'
        }
      ],
      '#fdddc3': [
        {
          mapping: 'var(--orangered-2)',
          description: 'orangered 2\nCedar组件库'
        }
      ],
      '#fcc59f': [
        {
          mapping: 'var(--orangered-3)',
          description: 'orangered 3\nCedar组件库'
        }
      ],
      '#faac7b': [
        {
          mapping: 'var(--orangered-4)',
          description: 'orangered 4\nCedar组件库'
        }
      ],
      '#f99057': [
        {
          mapping: 'var(--orangered-5)',
          description: 'orangered 5\nCedar组件库'
        }
      ],
      '#f77234': [
        {
          mapping: 'var(--orangered-6)',
          description: 'orangered 6\nCedar组件库'
        }
      ],
      '#cc5120': [
        {
          mapping: 'var(--orangered-7)',
          description: 'orangered 7\nCedar组件库'
        }
      ],
      '#a23511': [
        {
          mapping: 'var(--orangered-8)',
          description: 'orangered 8\nCedar组件库'
        }
      ],
      '#771f06': [
        {
          mapping: 'var(--orangered-9)',
          description: 'orangered 9\nCedar组件库'
        }
      ],
      '#4d0e00': [
        {
          mapping: 'var(--orangered-10)',
          description: 'orangered 10\nCedar组件库'
        }
      ],
      '#fff7e8': [
        {
          mapping: 'var(--orange-1)',
          description: 'orange 1\nCedar组件库'
        },
        {
          mapping: 'var(--warning-1)',
          description: 'warning 1\nCedar组件库'
        }
      ],
      '#ffe4ba': [
        {
          mapping: 'var(--orange-2)',
          description: 'orange 2\nCedar组件库'
        },
        {
          mapping: 'var(--warning-2)',
          description: 'warning 2\nCedar组件库'
        }
      ],
      '#ffcf8b': [
        {
          mapping: 'var(--orange-3)',
          description: 'orange 3\nCedar组件库'
        },
        {
          mapping: 'var(--warning-3)',
          description: 'warning 3\nCedar组件库'
        }
      ],
      '#ffb65d': [
        {
          mapping: 'var(--orange-4)',
          description: 'orange 4\nCedar组件库'
        },
        {
          mapping: 'var(--warning-4)',
          description: 'warning 4\nCedar组件库'
        }
      ],
      '#ff9a2e': [
        {
          mapping: 'var(--orange-5)',
          description: 'orange 5\nCedar组件库'
        },
        {
          mapping: 'var(--warning-5)',
          description: 'warning 5\nCedar组件库'
        }
      ],
      '#ff7d00': [
        {
          mapping: 'var(--orange-6)',
          description: 'orange 6\nCedar组件库'
        },
        {
          mapping: 'var(--warning-6)',
          description: 'warning 6\nCedar组件库'
        }
      ],
      '#d25f00': [
        {
          mapping: 'var(--orange-7)',
          description: 'orange 7\nCedar组件库'
        },
        {
          mapping: 'var(--warning-7)',
          description: 'warning 7\nCedar组件库'
        }
      ],
      '#a64500': [
        {
          mapping: 'var(--orange-8)',
          description: 'orange 8\nCedar组件库'
        },
        {
          mapping: 'var(--warning-8)',
          description: 'warning 8\nCedar组件库'
        }
      ],
      '#792e00': [
        {
          mapping: 'var(--orange-9)',
          description: 'orange 9\nCedar组件库'
        },
        {
          mapping: 'var(--warning-9)',
          description: 'warning 9\nCedar组件库'
        }
      ],
      '#4d1b00': [
        {
          mapping: 'var(--orange-10)',
          description: 'orange 10\nCedar组件库'
        },
        {
          mapping: 'var(--warning-10)',
          description: 'warning 10\nCedar组件库'
        }
      ],
      '#fffce8': [
        {
          mapping: 'var(--gold-1)',
          description: 'gold 1\nCedar组件库'
        }
      ],
      '#fdf4bf': [
        {
          mapping: 'var(--gold-2)',
          description: 'gold 2\nCedar组件库'
        }
      ],
      '#fce996': [
        {
          mapping: 'var(--gold-3)',
          description: 'gold 3\nCedar组件库'
        }
      ],
      '#fadc6d': [
        {
          mapping: 'var(--gold-4)',
          description: 'gold 4\nCedar组件库'
        }
      ],
      '#f9cc45': [
        {
          mapping: 'var(--gold-5)',
          description: 'gold 5\nCedar组件库'
        }
      ],
      '#f7ba1e': [
        {
          mapping: 'var(--gold-6)',
          description: 'gold 6\nCedar组件库'
        }
      ],
      '#cc9213': [
        {
          mapping: 'var(--gold-7)',
          description: 'gold 7\nCedar组件库'
        }
      ],
      '#a26d0a': [
        {
          mapping: 'var(--gold-8)',
          description: 'gold 8\nCedar组件库'
        }
      ],
      '#774b04': [
        {
          mapping: 'var(--gold-9)',
          description: 'gold 9\nCedar组件库'
        }
      ],
      '#4d2d00': [
        {
          mapping: 'var(--gold-10)',
          description: 'gold 10\nCedar组件库'
        }
      ],
      '#feffe8': [
        {
          mapping: 'var(--yellow-1)',
          description: 'yellow 1\nCedar组件库'
        }
      ],
      '#fefebe': [
        {
          mapping: 'var(--yellow-2)',
          description: 'yellow 2\nCedar组件库'
        }
      ],
      '#fdfa94': [
        {
          mapping: 'var(--yellow-3)',
          description: 'yellow 3\nCedar组件库'
        }
      ],
      '#fcf26b': [
        {
          mapping: 'var(--yellow-4)',
          description: 'yellow 4\nCedar组件库'
        }
      ],
      '#fbe842': [
        {
          mapping: 'var(--yellow-5)',
          description: 'yellow 5\nCedar组件库'
        }
      ],
      '#fadc19': [
        {
          mapping: 'var(--yellow-6)',
          description: 'yellow 6\nCedar组件库'
        }
      ],
      '#cfaf0f': [
        {
          mapping: 'var(--yellow-7)',
          description: 'yellow 7\nCedar组件库'
        }
      ],
      '#a38408': [
        {
          mapping: 'var(--yellow-8)',
          description: 'yellow 8\nCedar组件库'
        }
      ],
      '#785d03': [
        {
          mapping: 'var(--yellow-9)',
          description: 'yellow 9\nCedar组件库'
        }
      ],
      '#4d3800': [
        {
          mapping: 'var(--yellow-10)',
          description: 'yellow 10\nCedar组件库'
        }
      ],
      '#fcffe8': [
        {
          mapping: 'var(--lime-1)',
          description: 'lime 1\nCedar组件库'
        }
      ],
      '#edf8bb': [
        {
          mapping: 'var(--lime-2)',
          description: 'lime 2\nCedar组件库'
        }
      ],
      '#dcf190': [
        {
          mapping: 'var(--lime-3)',
          description: 'lime 3\nCedar组件库'
        }
      ],
      '#c9e968': [
        {
          mapping: 'var(--lime-4)',
          description: 'lime 4\nCedar组件库'
        }
      ],
      '#b5e241': [
        {
          mapping: 'var(--lime-5)',
          description: 'lime 5\nCedar组件库'
        }
      ],
      '#9fdb1d': [
        {
          mapping: 'var(--lime-6)',
          description: 'lime 6\nCedar组件库'
        }
      ],
      '#7eb712': [
        {
          mapping: 'var(--lime-7)',
          description: 'lime 7\nCedar组件库'
        }
      ],
      '#5f940a': [
        {
          mapping: 'var(--lime-8)',
          description: 'lime 8\nCedar组件库'
        }
      ],
      '#437004': [
        {
          mapping: 'var(--lime-9)',
          description: 'lime 9\nCedar组件库'
        }
      ],
      '#2a4d00': [
        {
          mapping: 'var(--lime-10)',
          description: 'lime 10\nCedar组件库'
        }
      ],
      '#e8ffea': [
        {
          mapping: 'var(--green-1)',
          description: 'green 1\nCedar组件库'
        },
        {
          mapping: 'var(--success-1)',
          description: 'success 1\nCedar组件库'
        }
      ],
      '#aff0b5': [
        {
          mapping: 'var(--green-2)',
          description: 'green 2\nCedar组件库'
        },
        {
          mapping: 'var(--success-2)',
          description: 'success 2\nCedar组件库'
        }
      ],
      '#7be188': [
        {
          mapping: 'var(--green-3)',
          description: 'green 3\nCedar组件库'
        },
        {
          mapping: 'var(--success-3)',
          description: 'success 3\nCedar组件库'
        }
      ],
      '#4cd263': [
        {
          mapping: 'var(--green-4)',
          description: 'green 4\nCedar组件库'
        },
        {
          mapping: 'var(--success-4)',
          description: 'success 4\nCedar组件库'
        }
      ],
      '#23c343': [
        {
          mapping: 'var(--green-5)',
          description: 'green 5\nCedar组件库'
        },
        {
          mapping: 'var(--success-5)',
          description: 'success 5\nCedar组件库'
        }
      ],
      '#00b42a': [
        {
          mapping: 'var(--green-6)',
          description: 'green 6\nCedar组件库'
        },
        {
          mapping: 'var(--success-6)',
          description: 'success 6\nCedar组件库'
        }
      ],
      '#009a29': [
        {
          mapping: 'var(--green-7)',
          description: 'green 7\nCedar组件库'
        },
        {
          mapping: 'var(--success-7)',
          description: 'success 7\nCedar组件库'
        }
      ],
      '#008026': [
        {
          mapping: 'var(--green-8)',
          description: 'green 8\nCedar组件库'
        },
        {
          mapping: 'var(--success-8)',
          description: 'success 8\nCedar组件库'
        }
      ],
      '#006622': [
        {
          mapping: 'var(--green-9)',
          description: 'green 9\nCedar组件库'
        },
        {
          mapping: 'var(--success-9)',
          description: 'success 9\nCedar组件库'
        }
      ],
      '#004d1c': [
        {
          mapping: 'var(--green-10)',
          description: 'green 10\nCedar组件库'
        },
        {
          mapping: 'var(--success-10)',
          description: 'success 10\nCedar组件库'
        }
      ],
      '#e8fffb': [
        {
          mapping: 'var(--cyan-1)',
          description: 'cyan 1\nCedar组件库'
        }
      ],
      '#b7f4ec': [
        {
          mapping: 'var(--cyan-2)',
          description: 'cyan 2\nCedar组件库'
        }
      ],
      '#89e9e0': [
        {
          mapping: 'var(--cyan-3)',
          description: 'cyan 3\nCedar组件库'
        }
      ],
      '#5edfd6': [
        {
          mapping: 'var(--cyan-4)',
          description: 'cyan 4\nCedar组件库'
        }
      ],
      '#37d4cf': [
        {
          mapping: 'var(--cyan-5)',
          description: 'cyan 5\nCedar组件库'
        }
      ],
      '#14c9c9': [
        {
          mapping: 'var(--cyan-6)',
          description: 'cyan 6\nCedar组件库'
        }
      ],
      '#0da5aa': [
        {
          mapping: 'var(--cyan-7)',
          description: 'cyan 7\nCedar组件库'
        }
      ],
      '#07828b': [
        {
          mapping: 'var(--cyan-8)',
          description: 'cyan 8\nCedar组件库'
        }
      ],
      '#03616c': [
        {
          mapping: 'var(--cyan-9)',
          description: 'cyan 9\nCedar组件库'
        }
      ],
      '#00424d': [
        {
          mapping: 'var(--cyan-10)',
          description: 'cyan 10\nCedar组件库'
        }
      ],
      '#e8f7ff': [
        {
          mapping: 'var(--blue-1)',
          description: 'blue 1\nCedar组件库'
        }
      ],
      '#c3e7fe': [
        {
          mapping: 'var(--blue-2)',
          description: 'blue 2\nCedar组件库'
        }
      ],
      '#9fd4fd': [
        {
          mapping: 'var(--blue-3)',
          description: 'blue 3\nCedar组件库'
        }
      ],
      '#7bc0fc': [
        {
          mapping: 'var(--blue-4)',
          description: 'blue 4\nCedar组件库'
        }
      ],
      '#57a9fb': [
        {
          mapping: 'var(--blue-5)',
          description: 'blue 5\nCedar组件库'
        }
      ],
      '#3491fa': [
        {
          mapping: 'var(--blue-6)',
          description: 'blue 6\nCedar组件库'
        }
      ],
      '#206ccf': [
        {
          mapping: 'var(--blue-7)',
          description: 'blue 7\nCedar组件库'
        }
      ],
      '#114ba3': [
        {
          mapping: 'var(--blue-8)',
          description: 'blue 8\nCedar组件库'
        }
      ],
      '#063078': [
        {
          mapping: 'var(--blue-9)',
          description: 'blue 9\nCedar组件库'
        }
      ],
      '#001a4d': [
        {
          mapping: 'var(--blue-10)',
          description: 'blue 10\nCedar组件库'
        }
      ],
      '#e8f3ff': [
        {
          mapping: 'var(--arcoblue-1)',
          description: 'arcoblue 1\nCedar组件库'
        },
        {
          mapping: 'var(--primary-1)',
          description: 'primary 1\nCedar组件库'
        },
        {
          mapping: 'var(--link-1)',
          description: 'link 1\nCedar组件库'
        }
      ],
      '#bedaff': [
        {
          mapping: 'var(--arcoblue-2)',
          description: 'arcoblue 2\nCedar组件库'
        },
        {
          mapping: 'var(--primary-2)',
          description: 'primary 2\nCedar组件库'
        },
        {
          mapping: 'var(--link-2)',
          description: 'link 2\nCedar组件库'
        }
      ],
      '#94bfff': [
        {
          mapping: 'var(--arcoblue-3)',
          description: 'arcoblue 3\nCedar组件库'
        },
        {
          mapping: 'var(--primary-3)',
          description: 'primary 3\nCedar组件库'
        },
        {
          mapping: 'var(--link-3)',
          description: 'link 3\nCedar组件库'
        }
      ],
      '#6aa1ff': [
        {
          mapping: 'var(--arcoblue-4)',
          description: 'arcoblue 4\nCedar组件库'
        },
        {
          mapping: 'var(--primary-4)',
          description: 'primary 4\nCedar组件库'
        },
        {
          mapping: 'var(--link-4)',
          description: 'link 4\nCedar组件库'
        }
      ],
      '#4080ff': [
        {
          mapping: 'var(--arcoblue-5)',
          description: 'arcoblue 5\nCedar组件库'
        },
        {
          mapping: 'var(--primary-5)',
          description: 'primary 5\nCedar组件库'
        },
        {
          mapping: 'var(--link-5)',
          description: 'link 5\nCedar组件库'
        }
      ],
      '#165dff': [
        {
          mapping: 'var(--arcoblue-6)',
          description: 'arcoblue 6\nCedar组件库'
        },
        {
          mapping: 'var(--primary-6)',
          description: 'primary 6\nCedar组件库'
        },
        {
          mapping: 'var(--link-6)',
          description: 'link 6\nCedar组件库'
        }
      ],
      '#0e42d2': [
        {
          mapping: 'var(--arcoblue-7)',
          description: 'arcoblue 7\nCedar组件库'
        },
        {
          mapping: 'var(--primary-7)',
          description: 'primary 7\nCedar组件库'
        },
        {
          mapping: 'var(--link-7)',
          description: 'link 7\nCedar组件库'
        }
      ],
      '#072ca6': [
        {
          mapping: 'var(--arcoblue-8)',
          description: 'arcoblue 8\nCedar组件库'
        },
        {
          mapping: 'var(--primary-8)',
          description: 'primary 8\nCedar组件库'
        },
        {
          mapping: 'var(--link-8)',
          description: 'link 8\nCedar组件库'
        }
      ],
      '#031a79': [
        {
          mapping: 'var(--arcoblue-9)',
          description: 'arcoblue 9\nCedar组件库'
        },
        {
          mapping: 'var(--primary-9)',
          description: 'primary 9\nCedar组件库'
        },
        {
          mapping: 'var(--link-9)',
          description: 'link 9\nCedar组件库'
        }
      ],
      '#000d4d': [
        {
          mapping: 'var(--arcoblue-10)',
          description: 'arcoblue 10\nCedar组件库'
        },
        {
          mapping: 'var(--primary-10)',
          description: 'primary 10\nCedar组件库'
        },
        {
          mapping: 'var(--link-10)',
          description: 'link 10\nCedar组件库'
        }
      ],
      '#f5e8ff': [
        {
          mapping: 'var(--purple-1)',
          description: 'purple 1\nCedar组件库'
        }
      ],
      '#ddbef6': [
        {
          mapping: 'var(--purple-2)',
          description: 'purple 2\nCedar组件库'
        }
      ],
      '#c396ed': [
        {
          mapping: 'var(--purple-3)',
          description: 'purple 3\nCedar组件库'
        }
      ],
      '#a871e3': [
        {
          mapping: 'var(--purple-4)',
          description: 'purple 4\nCedar组件库'
        }
      ],
      '#8d4eda': [
        {
          mapping: 'var(--purple-5)',
          description: 'purple 5\nCedar组件库'
        }
      ],
      '#722ed1': [
        {
          mapping: 'var(--purple-6)',
          description: 'purple 6\nCedar组件库'
        }
      ],
      '#551db0': [
        {
          mapping: 'var(--purple-7)',
          description: 'purple 7\nCedar组件库'
        }
      ],
      '#3c108f': [
        {
          mapping: 'var(--purple-8)',
          description: 'purple 8\nCedar组件库'
        }
      ],
      '#27066e': [
        {
          mapping: 'var(--purple-9)',
          description: 'purple 9\nCedar组件库'
        }
      ],
      '#16004d': [
        {
          mapping: 'var(--purple-10)',
          description: 'purple 10\nCedar组件库'
        }
      ],
      '#ffe8fb': [
        {
          mapping: 'var(--pinkpurple-1)',
          description: 'pinkpurple 1\nCedar组件库'
        }
      ],
      '#f7baef': [
        {
          mapping: 'var(--pinkpurple-2)',
          description: 'pinkpurple 2\nCedar组件库'
        }
      ],
      '#f08ee6': [
        {
          mapping: 'var(--pinkpurple-3)',
          description: 'pinkpurple 3\nCedar组件库'
        }
      ],
      '#e865df': [
        {
          mapping: 'var(--pinkpurple-4)',
          description: 'pinkpurple 4\nCedar组件库'
        }
      ],
      '#e13edb': [
        {
          mapping: 'var(--pinkpurple-5)',
          description: 'pinkpurple 5\nCedar组件库'
        }
      ],
      '#d91ad9': [
        {
          mapping: 'var(--pinkpurple-6)',
          description: 'pinkpurple 6\nCedar组件库'
        }
      ],
      '#b010b6': [
        {
          mapping: 'var(--pinkpurple-7)',
          description: 'pinkpurple 7\nCedar组件库'
        }
      ],
      '#8a0993': [
        {
          mapping: 'var(--pinkpurple-8)',
          description: 'pinkpurple 8\nCedar组件库'
        }
      ],
      '#650370': [
        {
          mapping: 'var(--pinkpurple-9)',
          description: 'pinkpurple 9\nCedar组件库'
        }
      ],
      '#42004d': [
        {
          mapping: 'var(--pinkpurple-10)',
          description: 'pinkpurple 10\nCedar组件库'
        }
      ],
      '#ffe8f1': [
        {
          mapping: 'var(--magenta-1)',
          description: 'magenta 1\nCedar组件库'
        }
      ],
      '#fdc2db': [
        {
          mapping: 'var(--magenta-2)',
          description: 'magenta 2\nCedar组件库'
        }
      ],
      '#fb9dc7': [
        {
          mapping: 'var(--magenta-3)',
          description: 'magenta 3\nCedar组件库'
        }
      ],
      '#f979b7': [
        {
          mapping: 'var(--magenta-4)',
          description: 'magenta 4\nCedar组件库'
        }
      ],
      '#f754a8': [
        {
          mapping: 'var(--magenta-5)',
          description: 'magenta 5\nCedar组件库'
        }
      ],
      '#f5319d': [
        {
          mapping: 'var(--magenta-6)',
          description: 'magenta 6\nCedar组件库'
        }
      ],
      '#cb1e83': [
        {
          mapping: 'var(--magenta-7)',
          description: 'magenta 7\nCedar组件库'
        }
      ],
      '#a11069': [
        {
          mapping: 'var(--magenta-8)',
          description: 'magenta 8\nCedar组件库'
        }
      ],
      '#77064f': [
        {
          mapping: 'var(--magenta-9)',
          description: 'magenta 9\nCedar组件库'
        }
      ],
      '#4d0034': [
        {
          mapping: 'var(--magenta-10)',
          description: 'magenta 10\nCedar组件库'
        }
      ],
      '#f7f8fa': [
        {
          mapping: 'var(--gray-1)',
          description: 'gray 1\nCedar组件库'
        }
      ],
      '#f2f3f5': [
        {
          mapping: 'var(--gray-2)',
          description: 'gray 2\nCedar组件库'
        }
      ],
      '#e5e6eb': [
        {
          mapping: 'var(--gray-3)',
          description: 'gray 3\nCedar组件库'
        }
      ],
      '#c9cdd4': [
        {
          mapping: 'var(--gray-4)',
          description: 'gray 4\nCedar组件库'
        }
      ],
      '#a9aeb8': [
        {
          mapping: 'var(--gray-5)',
          description: 'gray 5\nCedar组件库'
        }
      ],
      '#86909c': [
        {
          mapping: 'var(--gray-6)',
          description: 'gray 6\nCedar组件库'
        }
      ],
      '#6b7785': [
        {
          mapping: 'var(--gray-7)',
          description: 'gray 7\nCedar组件库'
        }
      ],
      '#4e5969': [
        {
          mapping: 'var(--gray-8)',
          description: 'gray 8\nCedar组件库'
        }
      ],
      '#272e3b': [
        {
          mapping: 'var(--gray-9)',
          description: 'gray 9\nCedar组件库'
        }
      ],
      '#1d2129': [
        {
          mapping: 'var(--gray-10)',
          description: 'gray 10\nCedar组件库'
        }
      ],
      '#ffffff': [
        {
          mapping: 'var(--color-white)',
          description: 'color white\nCedar组件库'
        },
        {
          mapping: 'var(--color-menu-light-bg)',
          description: 'color menu light bg\nCedar组件库'
        }
      ],
      '#000000': [
        {
          mapping: 'var(--color-black)',
          description: 'color black\nCedar组件库'
        }
      ],
      '#fff': [
        {
          mapping: 'var(--color-bg-1)',
          description: 'color bg 1\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-2)',
          description: 'color bg 2\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-3)',
          description: 'color bg 3\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-4)',
          description: 'color bg 4\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-5)',
          description: 'color bg 5\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-popup)',
          description: 'color bg popup\nCedar组件库'
        },
        {
          mapping: 'var(--color-bg-white)',
          description: 'color bg white\nCedar组件库'
        }
      ],
      '#232324': [
        {
          mapping: 'var(--color-menu-dark-bg)',
          description: 'color menu dark bg\nCedar组件库'
        }
      ]
    }
  }
};

export default projectConfig;
