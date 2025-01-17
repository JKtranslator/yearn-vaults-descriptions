import	React				from	'react';
import	Link				from	'next/link';
import	IconYearn			from	'components/icons/IconYearn';
import	useLocalization		from	'contexts/useLocalization';
import	{parseMarkdown}		from	'utils';

function	Index() {
	const	{common} = useLocalization();

	return (
		<section>
			<div className={'w-full mt-10 md:mt-20 pt-2'}>
				<div className={'flex flex-col'}>
					<div className={'mb-8'}>
						<IconYearn />
					</div>
					<h1
						className={'text-4xl md:text-6xl text-ygray-100 dark:text-white font-bold whitespace-pre-line mb-8'}
						dangerouslySetInnerHTML={{__html: parseMarkdown(common['overview-title'])}} />
					<div className={'max-w-xl mb-8'}>
						<p
							className={'text-ygray-200 dark:text-dark-50 whitespace-pre-line inline'}
							dangerouslySetInnerHTML={{__html: parseMarkdown(common['overview-description'])}}>
						</p>
					</div>
					<div className={'self-center md:self-auto'}>
						<Link href={'/yearn-and-curve'}>
							<button className={'text-white bg-yblue py-2 px-5 font-bold text-sm text-center md:text-left'} style={{width: 279}}>
								{common['overview-button']}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Index;
