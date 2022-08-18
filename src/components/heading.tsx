import { useRouter } from "next/router";
import { FC, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateProductInput } from "../interfaces/ecommerceV1";
import { Menu, Transition, Dialog, Disclosure } from '@headlessui/react';
import { Icon } from "./icon";
import { classNames } from "../utils/function";
import { ModalProduct } from "./formModal/formProduct";


interface HeadingDashboardProducts {
  title: string;
}
const product = {
  title: "product1"
}
const form = [
  { name: 'Created Product', href: 'new', current: true },
  // { name: 'Updated Site', href: 'updated', current: true },
  // { name: 'Delete Site', href: 'delete', current: true },

]
export const HeadingDashboardProducts: FC<HeadingDashboardProducts> = ({ title }) => {
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<CreateProductInput>({
    defaultValues: { ...product }
  })
  const { asPath, push, query } = useRouter()
  const [open, setOpen] = useState(false)
  const click = () => {
    setOpen(true)
  }
  const onSubmit = async (form: CreateProductInput) => {
    console.log(form);

  }
  return (
    <div className="flex items-baseline justify-between py-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{title}</h1>

      <Menu as="div" className="relative z-10 text-left flex w-auto">
        <Menu.Button className=" justify-center  text-sm font-medium text-gray-700 hover:text-gray-900">
          {/* <Icon icon="dots-vertical" /> */}
          <button className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" >
            <Icon icon='dots-vertical' className="w-6 h-6" />
          </button>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute top-10 right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {form.map((data, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <div
                      onClick={() => click()}
                      className={classNames(
                        data.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {data.name}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ModalProduct open={open} setOpen={setOpen} />
      
    </div>
  )
}