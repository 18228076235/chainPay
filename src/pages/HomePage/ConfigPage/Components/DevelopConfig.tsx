import React, { useState } from 'react'
import { useStore, observer } from 'store/utils'
import { Modal, Form, Input, message, Button, Card } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { FormProps } from 'antd/lib/form'
import { useMount, useUnmount } from 'hooks'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

enum ESettingConfig {
  PUBLIC_KEY,
  WHITE_LIST,
  CALLBACK_URL
}
interface ISettingConfig {
  label: string
  value: ESettingConfig
}
const settingConfig: ISettingConfig[] = [
  {
    label: '设置接口签名公钥',
    value: ESettingConfig.PUBLIC_KEY
  },
  {
    label: '设置IP白名单',
    value: ESettingConfig.WHITE_LIST
  },
  {
    label: '设置应用回调地址',
    value: ESettingConfig.CALLBACK_URL
  }
]
interface IProps extends FormProps {}
const DevelopConfig = (props: IProps) => {
  const { ConfigPage } = useStore()
  const { setCurrent } = ConfigPage
  const [visible, setVisible] = useState<boolean>(false)
  const [selectItem, setSelectItem] = useState<ISettingConfig | null>(null)
  useMount(() => {})
  useUnmount(() => {})

  const onFinish = (values: any) => {
    setCurrent(2)
  }
  const handleSetting = (val: ISettingConfig) => {
    setVisible(true)
    setSelectItem(val)
    // switch (val) {
    //   case ESettingConfig.CALLBACK_URL:
    //     break
    //   case ESettingConfig.PUBLIC_KEY:
    //     break
    //   case ESettingConfig.WHITE_LIST:
    //     break
    //   default:
    //     break
    // }
  }

  const handleOk = () => {}
  return (
    <div className="develop_config">
      <Card title="开发配置">
        {settingConfig.map(item => (
          <p key={item.value} className="mt-20">
            {item.label}
            <a className="tr" onClick={() => handleSetting(item)}>
              设置
            </a>
          </p>
        ))}
      </Card>
      <Form
        {...formItemLayout}
        onFinish={onFinish}
        layout="inline"
        className="modal_form"
        scrollToFirstError={true}
      >
        <Form.Item
          name="title"
          label="应用名称"
          rules={[
            {
              required: true,
              message: '请输入应用名称'
            },
            {
              max: 32,
              message: '不超过32个字符'
            }
          ]}
        >
          <Input className="modal_form_item_input" />
        </Form.Item>
        <Form.Item
          name="website"
          label="应用官网"
          rules={[
            {
              required: true,
              message: '请输入'
            },
            {
              max: 50,
              message: '不超过50个字符'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: '请输入'
            },
            {
              max: 250,
              message: '不超过250个字符'
            }
          ]}
          name="description"
          label="应用描述"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title={selectItem?.label}
        visible={visible}
        className="modal"
        okText="保存"
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        width={300}
      ></Modal>
    </div>
  )
}
export default observer(DevelopConfig)
