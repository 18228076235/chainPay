/*
 * @Author: shiyao you
 * @Date: 2019-11-26 11:28:15
 * @Last Modified by: qiuying
 * @Last Modified time: 2020-03-20 17:17:29
 */

import React, { useState, useEffect } from 'react'
import { Modal, Form, Input } from 'antd'
import { FormInstance } from 'antd/lib/form'
import AccountStore from 'store/Account'
import './index.scss'
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}
interface IProps {
  visible: boolean
  formData?: any
  handleClose: () => void
}

interface IEditPwdParams {
  newPassword: string
  originPassword: string
  userName: string
}
const bodyStyle: object = {
  background: '#F5F6FA',
  padding: '16px'
}
/**
 * 修改密码页面
 * @param props
 */
function EditPwdModal(props: IProps) {
  const [userName, setUserName] = useState('')
  const form: FormInstance = Form.useForm()[0]
  // const [form] = useQUForm()
  const { resetFields, getFieldsValue } = form
  /**
   * 确定提交修改密码
   */
  const handleOk = () => {
    form.submit()
  }
  const onFinish = (values: any) => {
    const { newPassword, originPassword } = values
    const formData: IEditPwdParams = {
      newPassword,
      originPassword,
      userName
    }
    AccountStore.editPwd(formData)
    props.handleClose()
  }

  const handleClose = () => {
    props.handleClose()
    resetFields()
  }

  /**
   * 副作用处理函数
   */
  useEffect(() => {
    const { username } = props.formData
    // 设置修改的用户Id
    setUserName(username)
  }, [props.formData])

  return (
    <Modal
      title="修改密码"
      visible={props.visible}
      className="modal"
      okText="保存"
      onOk={handleOk}
      onCancel={handleClose}
      bodyStyle={bodyStyle}
      width={300}
    >
      <div className="p-26 modal_parent">
        <Form
          form={form}
          layout="inline"
          className="modal_form"
          onFinish={onFinish}
          {...formItemLayout}
        >
          <Form.Item
            className="modal_form_item mb-20"
            label="原始密码"
            name="originPassword"
            rules={[
              {
                required: true,
                message: '请输入原始密码'
              }
            ]}
          >
            <Input.Password className="modal_form_item_input" />
          </Form.Item>
          <Form.Item
            className="modal_form_item mb-20"
            rules={[
              {
                required: true,
                message: '请输入新密码'
              }
            ]}
            label="新密码"
            name="newPassword"
          >
            <Input.Password className="modal_form_item_input" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}
export default React.memo(EditPwdModal)
