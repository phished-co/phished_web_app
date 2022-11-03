import { useRouter } from "next/router"
import { createStyles, Container, Text, Divider, Button, Radio, NumberInput } from '@mantine/core';
import MyInput from "../mantine/input/Input";
import Checkboxx from "../checkbox/Checkbox"


const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 34,
      fontWeight: 900,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 24,
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
    },

    title2: {
      fontSize: 34,
      fontWeight: 600,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 24,
      },
    },

}));





export default function OnboardStep({

}) {

  const r = useRouter();
  const { classes } = useStyles();

  const {page} = r.query

  if (page === "1"){
    return <>
    <div className='section'>
        <h2 className={classes.title}>
            I want to phish{' '}
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'blue' }} inherit>
                someone else
            </Text>
        </h2>
        <h2 className={classes.description}>
            Help your friends and family stay safe
        </h2>
        <div className="section">
            <Button variant= "fill" type="null"
                onClick = {
                ()=>r.replace({
                    pathname:"/onboarding",
                    query: {
                        page: page === undefined ? 1 :  Number(page) + 1,
                    }
                })
            }>
            Continue
            </Button>
        </div>
    </div>
        
    <Divider />

    <div className='section'>
        <h2 className={classes.title}>
            I want to phish{' '}
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'blue' }} inherit>
                myself
            </Text>
        </h2>
        <h2 className={classes.description}>
            Start testing yourself now
        </h2>
        <div className="section">
            <Button variant= "fill" type="null"
                onClick = {
                ()=>r.replace({
                    pathname:"/onboarding",
                    query: {
                        page: page === undefined ? 1 :  Number(page) + 1,
                    }
                })
            }>
            Continue
            </Button>
        </div>
    </div>

</>}

    if (page === "2"){
        return <>
        <div className="section">
            <h2 className={classes.title}>
                Who do you want to phish?
            </h2>
            <h2 className={classes.description}>
                Only phish people who you have a <Text component="span" underline color="blue">personal relationship</Text> with
            </h2>
        </div>
        <div className="section">
            <Radio.Group
            name="Phish type"
            orientation="vertical"
            // label="Select your favorite framework/library"
            description="This is anonymous"
            withAsterisk
            >
                <Radio value="Family member" label="Family member" />
                <Radio value="Friend" label="Friend" />
                <Radio value="Coworker" label="Coworker" />
                <Radio value="Student" label="Student" />
                <Radio value="Client" label="Client" />
                <Radio value="Other" label="Other" />
            </Radio.Group>

            <div className="section">
            <Button variant= "fill" type="null"
                onClick = {
                ()=>r.replace({
                    pathname:"/onboarding",
                    query: {
                        page: page === undefined ? 1 :  Number(page) + 1,
                    }
                })
            }>
            Continue
            </Button>
        </div>
        </div>

    </>}

    if (page === "3"){
        return <>
        <div className="section">
            <h2 className={classes.title}>
                Tell us about them
            </h2>
            <h2 className={classes.description}>
                To get the best experrience, we need a bit of info about them
            </h2>
        </div>

        <div className="section">
            <MyInput 
            label= "What is their first name?"
            required
            />
            <MyInput 
            label= "What is their last name?"
            required
            />
            <MyInput 
            label= "What is their email?"
            placeholder= "example@email.com"
            required
            />
        </div>
        <div className="section">
            <Button variant= "fill" type="null"
                onClick = {
                ()=>r.replace({
                    pathname:"/onboarding",
                    query: {
                        page: page === undefined ? 1 :  Number(page) + 1,
                    }
                })
            }>
            Continue
            </Button>
        </div>

    </>}

    if (page === "4"){
        return <>
        <div className="section">
          <h2 className={classes.title2}>
            Phished is for <Text component="span" weight={900}>educational use only.</Text>
          </h2>
         
         
          <h2 className={classes.title2}>
            Phishing someone without their consent is a <Text component="span" weight={900}>crime.</Text>
          </h2>
         </div>
         <div className="section">
          <Checkboxx
          label="I agree to only phish people I have a personal relationship with"
          ></Checkboxx>
          <Checkboxx
          label="I agree to use Phished for educational purposes exclusively"
          ></Checkboxx>
          <MyInput
          label="Type your full name"
          ></MyInput>
         </div>
         <div className="section">
            <Button variant= "fill" type="null"
                onClick = {
                ()=>r.replace({
                    pathname:"/onboarding",
                    query: {
                        page: page === undefined ? 1 :  Number(page) + 1,
                    }
                })
            }>
            Continue
            </Button>
        </div> 
        

    </>}

    if (page === "5"){
        return <>
        <div className="section">
          <h2 className={classes.title}>
            Verify your identity
          </h2>
          <h2 className={classes.description}>
            Please enter the code sent to trevorlee@email.com
          </h2>
        </div>
        <MyInput />
        <div className="section">
            <Button variant= "fill" type="null"
                onClick = {
                ()=>r.replace({
                    pathname:"/onboarding",
                    query: {
                        page: page === undefined ? 1 :  Number(page) + 1,
                    }
                })
            }>
            Continue
            </Button>
        </div>

    </>}

    if (page === "6"){
        return <>
        <div className="section">
          <h2 className={classes.title}>
            All set!
          </h2>
        </div>
        <div className="section">
            <Button variant= "fill" type="null"
                onClick = {
                ()=>r.replace({
                    pathname:"/",
                })
            }>
            Done!
            </Button>
        </div>

    </>}
}
