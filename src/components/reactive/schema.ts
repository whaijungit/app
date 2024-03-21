import { ComponentType } from "./custom"

export interface ISchema {
    id: number
    type: ComponentType
    formItemProps: {

    },
    componentProps: {

    }
}

export const options: ISchema[] = [
    {
        id: 1,
        "type": "radio",
        "formItemProps": {
            "name": "vcf_groups",
            "label": "数据来源省份",
            "tooltip": "数据来源省份提示",
            "rules": [
                {
                    "required": true,
                    "message": ""
                }
            ],
            "initialValue": "hunan"
        },
        "componentProps": {
            "options": [
                {
                    "label": "湖南省",
                    "value": "hunan"
                },
                {
                    "label": "广东省",
                    "value": "guandong"
                }
            ]
        }
    },
    {
        id: 2,
        "type": "cascader",
        "formItemProps": {
            "rules": [
                {
                    "required": true,
                    "message": "请选择参考基因组版本"
                }
            ],
            "initialValue": [
                "hunan",
                "changsha",
                "furuqu"
            ],
            "label": "基因组版本",
            "name": "choose_group",
            "tooltip": "参考基因组版本提示"
        },
        "componentProps": {
            "allowClear": true,
            "options": [
                {
                    "label": "湖南省",
                    "value": "hunan",
                    "children": [
                        {
                            "label": "长沙",
                            "value": "changsha",
                            "children": [
                                {
                                    "label": "芙蓉区",
                                    "value": "furuqu"
                                },
                                {
                                    "label": "天心区",
                                    "value": "tianxinqu"
                                },
                                {
                                    "label": "岳麓区",
                                    "value": "yueluoqu"
                                }
                            ]
                        }
                    ]
                }
            ],
            "placeholder": "请选择参考基因组版本"
        }
    }
]