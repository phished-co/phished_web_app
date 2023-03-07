import styles from './Login.module.css';
import { useReducer, useState } from 'react';
import { Text } from '@mantine/core';

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: '',
      password: '',
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Login() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      alert('You have submitted the form.');
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 1500);
  };

  return (
    <div className={styles.container}>
      {submitting && (
        <div>
          You are submitting the following:
          <ul className={styles.submitting_elements}>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset} disabled={submitting}>
          <label>
            <Text className={styles.input_label}>Email</Text>
            <input
              name="email"
              onChange={handleChange}
              value={formData.email || ''}
            />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset} disabled={submitting}>
          <label>
            <Text className={styles.input_label}>Password</Text>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              value={formData.password || ''}
            />
          </label>
        </fieldset>
        <a className={styles.a} herf="#">
          Forgot your password?
        </a>

        {/* not making this the button component cause it messes up the disabled and other stuff  */}
        {/* fix later */}
        <button className={styles.submit} type="submit" disabled={submitting}>
          Login
        </button>
      </form>
      <Text className={styles.or}>Or log in with:</Text>
      <div className={styles.icons}>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
      <a className={styles.bottom_tip} href="#">
        Already have an account?{' '}
      </a>
    </div>
  );
}
