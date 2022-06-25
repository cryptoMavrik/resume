import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react"
import { FlexColumn, FlexRow, Heading, Text } from "../../styles"
import { Container, EmailForm, Input, SubmitButton, TextArea } from "./styles"

emailjs.init("NNsqFjJRMcWt4TsU7")

const Contact: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const [isFail, setIsFail] = useState(false)
    const handleSuccess = () => {
        setIsSuccess(true)
        setTimeout(() => {
            setIsSuccess(false)
        }, 3000)
    }
    const handleFail = () => {
        setIsFail(true)
        setTimeout(() => {
            setIsFail(false)
        }, 3000)
    }


    const handleSubmit = () => {
        setIsSuccess(false)
        emailjs.sendForm("service_6dt2fbh", "template_6ezaths", "#email_form")
            .then((res) => {
                handleSuccess()
                console.log('SUCCESS!', res.status, res.text);
            })
            .catch((error) => {
                handleFail()
                console.log('FAILED...', error);
            });
    }

    return (
        <Container>
            <EmailForm>
                <FlexRow py={"1rem"}>
                    <Heading>
                        Contact Me
                    </Heading>
                </FlexRow>
                <form id="email_form">
                    <FlexColumn>
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            value={name}
                            required
                            placeholder="Your name"
                            name="from_name"
                        />
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            value={email}
                            required
                            placeholder="Your email"
                            name="reply_to"
                        />
                        <TextArea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                            placeholder="Message"
                            name="message"
                        />
                        <SubmitButton type="button" value="Submit" onClick={handleSubmit} />
                    </FlexColumn>
                </form>
            </EmailForm>
            <FlexRow>
                <Text scale="sm">
                    {isSuccess && "Success"}
                </Text>
                <Text scale="sm">
                    {isFail && "Failed to send"}
                </Text>
            </FlexRow>
        </Container>
    )
}

export default Contact