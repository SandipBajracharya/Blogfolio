// import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { signIn } from 'next-auth/react';
import BasicLayout from '@/ui/layouts/BasicLayout';
import Button from '@/ui/component/Button';
import { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorNotification, SuccessNotification } from '@/ui/component/Notification';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>();

  const router = useRouter();

  const handleClick: SubmitHandler<UserCredentials> = (data) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((user) => {
        if (user && user.ok) {
          SuccessNotification(`Welcome!`);
          router.push(`/`);
        } else {
          throw user;
        }
      })
      .catch((err) => {
        console.log({ error: err });
        let errMessage = 'Something went wrong';
        if (err.status === 401) {
          errMessage = 'Invalid credentials';
        }
        ErrorNotification(errMessage);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full md:w-[25%] ">
        <div className="p-8 shadow-lg dark:shadow-dark-grey shadow-fade bg-white dark:bg-transparent rounded-md">
          {/* <form method="post" action="/api/auth/callback/credentials"> */}
          <form onSubmit={handleSubmit(handleClick)}>
            {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
            <div>
              <label>Email</label>
              <input
                type="text"
                {...register('email', { required: true })}
                className={`block w-full rounded-md border-0 py-1.5 px-4 ring-1 ring-inset focus:ring-2 focus:outline-none dark:text-fade-grey sm:text-sm/6 mt-1 ${errors && errors.email ? 'active:ring-error focus:ring-error ring-error' : 'active:ring-accent focus:ring-accent ring-fade'}`}
              />
              {errors.email && <span className="mt-1 text-sm text-error">Email is required</span>}
            </div>
            <div className="mt-4 mb-6">
              <label>Password</label>
              <input
                type="password"
                {...register('password', { required: true })}
                className={`block w-full rounded-md border-0 py-1.5 px-4 ring-1 ring-inset focus:ring-2 focus:outline-none dark:text-fade-grey sm:text-sm/6 mt-1  ${errors && errors.password ? 'active:ring-error focus:ring-error ring-error' : 'active:ring-accent focus:ring-accent ring-fade'}`}
              />
              {errors.password && (
                <span className="mt-1 text-sm text-error">Password is required</span>
              )}
            </div>
            <Button text="Sign in" isPrimary type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

// NOTE: No need to pass csrfToken to the page as it is handled by singIn();

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
