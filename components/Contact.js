import { useEffect } from 'react'
import styles from '../styles/Contact.module.scss'
import { TextInput, Textarea, Button, Center } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ActionIcon } from '@mantine/core'
import { At, User, Inbox, Message, CircleCheck } from 'tabler-icons-react'
import { useForm as useFormFormspree, ValidationError } from '@formspree/react'
import { showNotification } from '@mantine/notifications'

function Contact() {
  const [state, handleSubmit] = useFormFormspree('xayvlrkd')

  // mantine form field value and validation
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    validate: {
      name: (value) => (value.length < 1 ? 'Required' : null),
      subject: (value) => (value.length < 1 ? 'Required' : null),
      message: (value) => (value.length < 1 ? 'Required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  useEffect(() => {
    // first
    if (state.succeeded) {
      showNotification({
        title: 'Your submission has been received',
        // message: 'Your submission has been received',
        // icon: <CircleCheck size={500}/>,
        color: 'green',
      })
    }
    return () => {
      //   second
    }
  }, [state.succeeded])
  // first
  useEffect(() => {
    if (state.errors.length > 0) {
      showNotification({
        title: 'Sorry! Something went wrong',
        message: 'Please try again',
        // icon: <CircleCheck size={500}/>,
        color: 'red',
      })
    }
    return () => {
      //   second
    }
  }, [state])

  return (
    <div className={styles.contactContainer}>
      <h1 className="title">Contact Me</h1>

      {state.succeeded !== true ? (
        <div className={styles.formContainer}>
          {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              variant="filled"
              //   label="Your email"
              placeholder="Name"
              icon={<User size={18} />}
              size="lg"
              mb="10px"
              // required
              {...form.getInputProps('name')}
            />
            <TextInput
              variant="filled"
              //   label="Your email"
              placeholder="Email"
              icon={<At size={18} />}
              size="lg"
              mb="10px"
              {...form.getInputProps('email')}
              // required
            />
            <TextInput
              variant="filled"
              //   label="Your email"
              placeholder="Subject"
              icon={<Inbox size={18} />}
              size="lg"
              mb="10px"
              // required
              {...form.getInputProps('subject')}
            />
            <Textarea
              variant="filled"
              //   label="Your email"
              placeholder="Message"
              icon={<Message size={18} />}
              size="lg"
              mb="10px"
              // required
              {...form.getInputProps('message')}
              minRows={4}
              autosize
            />
            <Center>
              <Button
                type="submit"
                variant="outline"
                loading={state.submitting}
                mt={10}
              >
                Send
              </Button>
            </Center>
          </form>
        </div>
      ) : (
        <>
          <Center>
            <ActionIcon size="xl" color="green">
              <CircleCheck />
            </ActionIcon>
            <p> Your submission has been received.</p>
          </Center>
          <Center>
            <p> Thanks for your submission!</p>
          </Center>
        </>
      )}
    </div>
  )
}

export default Contact
