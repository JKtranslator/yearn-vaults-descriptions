import	React				from	'react';
import	Link				from	'next/link';
import	Image				from	'next/image';
import	IconRocket			from	'components/icons/IconRocket';
import	useLocalization		from	'contexts/useLocalization';
import	{parseMarkdown}		from	'utils';

function	Index() {
	const	{common} = useLocalization();

	return (
		<section>
			<div className={'w-full mt-10 md:mt-20 pt-2'}>
				<div className={'flex flex-col'}>
					<div className={'mb-8'}>
						<IconRocket width={40} height={40} />
					</div>
					<h1 className={'text-4xl md:text-6xl text-ygray-100 dark:text-white font-bold mb-8 whitespace-pre-line'}>
						{common['curve-boost-title']}
					</h1>
					<div className={'max-w-xl mb-8'}>
						<p
							className={'text-ygray-200 dark:text-dark-50 whitespace-pre-line inline mt-6'}
							dangerouslySetInnerHTML={{__html: parseMarkdown(common['curve-boost-description'])}} />
					</div>
					<div className={'max-w-full'} style={{width: 675, height: 60}}>
						<Image
							src={'/calculator.jpeg'}
							objectFit={'cover'}
							width={675}
							height={60} />
					</div>
					<div className={'max-w-xl my-8'}>
						<p
							className={'text-ygray-200 dark:text-dark-50 whitespace-pre-line inline mt-6'}
							dangerouslySetInnerHTML={{__html: parseMarkdown(common['curve-boost-description-next'])}} />
					</div>
					<div className={'self-center md:self-auto'}>
						<Link href={'/ethereum/stables'}>
							<button className={'text-white bg-yblue py-2 px-5 font-bold text-sm text-center md:text-left'} style={{width: 279}}>
								{common['curve-boost-next-button']}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Index;
