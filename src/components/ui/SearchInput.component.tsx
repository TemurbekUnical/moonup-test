import Icons from '@/assets/svg-icons'
import { useCallback, useEffect } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'

interface Props {
	className?: string
	placeholder?: string
}

const SearchInput = ({ className = '', placeholder = 'Search...' }: Props) => {
	const [value, setValue] = useQueryParam('search', StringParam)

	useEffect(() => {
		setValue(undefined)
	}, [])

	const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value), [setValue])

	return (
		<div className={'relative w-full ' + className}>
			<div className="absolute  inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
				<Icons.Search />
			</div>
			<input
				type="search"
				placeholder={placeholder}
				required
				value={value || ''}
				onChange={onChange}
				className="block w-[100%] ps-[2.75rem] py-[10px] px-4 outline-none   rounded-lg border border-gray-200 hover:border-gray-400 "
			/>
		</div>
	)
}

export default SearchInput
