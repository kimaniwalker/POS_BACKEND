import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";


export const Contact = () => {
    const { control, trigger, handleSubmit, formState: { errors, isValid, isDirty }, } = useForm({
        mode: 'onChange',
        defaultValues: {
            Name: '',
            Email: '',
            Phone: '',
            Message: ''
        }
    });

    React.useEffect(() => {
        trigger()
    }, [trigger])

    const onSubmit = (data: any) => {
        console.log(data)
    };

    return (
        <Form>
                <Title>Get In Touch</Title>
            <Content>
               
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.Name && (<ErrMessage>{errors.Name.message}</ErrMessage>)}
                    <Controller
                        name="Name"
                        control={control}
                        rules={{required: {
                            value: true,
                            message: 'This is a required field'
                        }}}
                        render={({ field, formState }) => <TextBox isDirty={formState.errors.Name ? true: false} onChange={field.onChange} placeholder={field.name} />}
                    />
                    {errors.Email && (<ErrMessage>{errors.Email.message}</ErrMessage>)}
                    <Controller
                        name="Email"
                        rules={{required: {
                            value: true,
                            message: 'This is a required field'
                        }}}
                        control={control}
                        render={({ field, formState }) => <TextBox isDirty={formState.errors.Email ? true: false} onChange={field.onChange} placeholder={field.name} />}
                    />
                    {errors.Phone && (<ErrMessage>{errors.Phone.message}</ErrMessage>)}
                    <Controller
                        name="Phone"
                        rules={{required: {
                            value: true,
                            message: 'This is a required field'
                        }}}
                        control={control}
                        render={({ field, formState }) => <TextBox isDirty={formState.errors.Phone ? true: false} onChange={field.onChange} placeholder={field.name} />}
                    />
                    {errors.Message && (<ErrMessage>{errors.Message.message}</ErrMessage>)}
                    <Controller
                        name="Message"
                        rules={{required: {
                            value: true,
                            message: 'This is a required field'
                        }}}
                        control={control}
                        render={({ field, formState }) => <TextBoxLarge isDirty={formState.errors.Message ? true: false} onChange={field.onChange} rows={10} placeholder={field.name} />}
                    />
                    <ButtonWrapper>

                    <Button disabled={!isValid} type="submit">Submit</Button>
                    </ButtonWrapper>
                </form>
            </Content>
        </Form>
    );
};

const TextBox = styled.input<{isDirty: boolean}>`
width: 100%;
display: block;
margin: 1rem 0;
    font-size: 18px;
  padding: 10px;
  border-radius: 16px;
  background: papayawhip;
  border: 2px solid lightgray;
  border-color: ${({isDirty}) => isDirty ? 'red' : 'lightgray'};
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }

  font-weight: 100;
`
const TextBoxLarge = styled.textarea<{isDirty: boolean}>`
width: 100%;
display: block;
margin: 1rem 0;
    font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: 2px solid lightgray;
  border-color: ${({isDirty}) => isDirty ? 'red' : 'lightgray'};
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }

  font-weight: 100;
`
const Form = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    form {
        padding: 16px;
        max-width: 768px;
        width: 100%;
    }
`
const Title = styled.h2`
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
`
const Button = styled.button`
text-align: center;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  height: 50px;
  width: 250px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 48px;
  display: block;

  :hover {
    cursor: pointer;
  }
`;
const ErrMessage = styled.p`
    font-size: 1rem;
    color: red;
    font-weight: 100;
    margin: 0;
`
const ButtonWrapper =styled.div`
    display: flex;
    justify-content: center;
`