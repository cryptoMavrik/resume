import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { FlexColumn, FlexRow, Heading, Text } from "../../styles";
import { Container, EmailForm, Input, SubmitButton, TextArea } from "./styles";

emailjs.init("NNsqFjJRMcWt4TsU7");

const Contact: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    const { values, onChange } = useForm();

    const handleSuccess = () => {
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);
        setIsSending(false);
    };

    const handleFail = () => {
        setIsFail(true);
        setTimeout(() => {
            setIsFail(false);
        }, 3000);
        setIsSending(false);
    };

    const handleSubmit = () => {
        if (!values.reply_to || !values.from_name || !values.message) {
            handleFail();
            return;
        }
        setIsSuccess(false);
        setIsSending(true);
        emailjs
            .sendForm("service_6dt2fbh", "template_6ezaths", "#email_form")
            .then((res) => {
                handleSuccess();
                console.log("SUCCESS!", res.status, res.text);
            })
            .catch((error) => {
                handleFail();
                console.log("FAILED...", error);
            });
    };

    return (
        <Container>
            <EmailForm
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
            >
                <FlexRow py={"1rem"}>
                    <Heading>Contact Me</Heading>
                </FlexRow>
                <form id="email_form">
                    <FlexColumn>
                        <Input
                            onChange={(e) => onChange(e)}
                            type="text"
                            value={values.from_name}
                            required
                            autoComplete="off"
                            placeholder="Your name"
                            name="from_name"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.25,
                                duration: 0.5,
                            }}
                        />
                        <Input
                            onChange={(e) => onChange(e)}
                            type="email"
                            value={values.reply_to}
                            required
                            autoComplete="off"
                            placeholder="Your email"
                            name="reply_to"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                            }}
                        />
                        <TextArea
                            onChange={(e) => onChange(e)}
                            value={values.message}
                            required
                            autoComplete="off"
                            placeholder="Message"
                            name="message"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.75,
                                duration: 0.5,
                            }}
                        />
                        <SubmitButton
                            type="button"
                            value="Submit"
                            onClick={handleSubmit}
                            disabled={isSending}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 1.25,
                                duration: 0.5,
                            }}
                        />
                    </FlexColumn>
                </form>
            </EmailForm>
            <FlexRow py={"1rem"}>
                <Text color="hsl(160 50% 50%)">
                    {isSuccess && "Success! I will get back to you soon!"}
                </Text>
                <Text color="hsl(350 50% 50%)">
                    {isFail && "Failed to send. Check fields and try again"}
                </Text>
            </FlexRow>
        </Container>
    );
};

export default Contact;
