import propTypes from 'prop-types';
import Header from './Header';

const Page = ({ children, cool }) => (
	<div>
		<Header />
		<h2>This is the Page component</h2>
		<h3>{cool}</h3>
		{children}
	</div>
);

Page.propTypes = {
	cool: propTypes.string,
	children: propTypes.any
};

export default Page;
