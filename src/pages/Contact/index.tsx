import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import { FlexColumn, FlexRow, Heading, Text } from "../../styles";
import isEmail from "../../utils/isEmail";
import { Container, EmailForm, SubmitButton, TextArea } from "./styles";

emailjs.init("NNsqFjJRMcWt4TsU7");

const Contact: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    const { values, setValues, onChange, error } = useForm();

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
        if (!values.reply_to || !values.from_name) {
            handleFail();
            return;
        }
        if (error) {
            handleFail()
            return
        }

        setIsSuccess(false);
        setIsSending(true);
        emailjs
            .sendForm("service_6dt2fbh", "template_6ezaths", "#email_form")
            .then((res) => {
                handleSuccess();
                console.log("SUCCESS!", res.status, res.text);
            })
            .catch((err) => {
                handleFail();
                console.log("FAILED...", err);
            });
        setValues({
            from_name: "",
            reply_to: "",
            message: ""
        })
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
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.25,
                                duration: 0.5,
                            }}>
                            <Input
                                required
                                autoComplete="off"
                                label="Name"
                                name="from_name"
                                value={values.from_name}
                                onChange={(e) => {
                                    onChange(e)
                                }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                            }}>

                            <Input
                                required
                                value={values.reply_to}
                                autoComplete="off"
                                label="Email address"
                                name="reply_to"
                                onChange={(e) => {
                                    onChange(e)
                                }}
                            />
                        </motion.div>
                        <TextArea
                            mt={"1rem"}
                            name="message"
                            value={values.message}
                            required
                            autoComplete="off"
                            placeholder="Message (optional)"
                            onChange={(e) => onChange(e)}
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
                            disabled={isSending || !values.from_name || !isEmail(values.reply_to)}
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
                        >
                            Submit
                        </SubmitButton>
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
