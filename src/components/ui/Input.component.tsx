import React from 'react'

const Input = ({
	iserror,
	...rest
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { iserror?: boolean }) => {
	return (
		<input
			{...rest}
			className={
				'border transition-all outline-none text-base rounded-[10px] block w-full py-3 px-4' +
				rest.className +
				(iserror ? 'border border-error' : 'border-gray-200')
			}
		/>
	)
}

export default Input
