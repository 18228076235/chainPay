import React, { useState } from 'react'
import { useStore, observer } from 'store/utils'
import { Modal, Form, Input, Upload, message, Button } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { FormItemProps, FormProps } from 'antd/lib/form'
import {
  UploadProps,
  UploadListProps,
  UploadChangeParam,
  RcFile
} from 'antd/lib/upload'
import { useMount, useUnmount } from 'hooks'
function getBase64(img: Blob, callback: (data: any) => void) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file: RcFile) {
  const isLt2M = file.size / 1024 / 1024 < 3
  if (!isLt2M) {
    message.error('Image must smaller than 3MB!')
  }
  return isLt2M
}

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e && e.fileList
}

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

interface IProps extends FormProps {}
const BaseConfig = (props: IProps) => {
  const { ConfigPage } = useStore()
  const { setCurrent } = ConfigPage
  const [loading, setLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  useMount(() => {})
  useUnmount(() => {})
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  )
  const onFinish = (values: any) => {
    setCurrent(1)
  }
  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(false)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, url => {
        setImageUrl(url)
        setLoading(false)
      })
    }
  }

  return (
    <div className="base_config">
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
          className="modal_form_item"
          label="应用图标"
          name="icon"
          getValueFromEvent={normFile}
          valuePropName="fileList"
          extra="请上传应用高清图片，支持.jpg, .jpeg, .png格式，建议320 * 320像素，小于3M"
          rules={[
            {
              required: true,
              message: '请输入应用图标'
            }
          ]}
        >
          <Upload
            name="upload"
            listType="picture-card"
            className="avatar-uploader"
            accept="jpg, .jpeg, .png"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
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
    </div>
  )
}
export default observer(BaseConfig)
