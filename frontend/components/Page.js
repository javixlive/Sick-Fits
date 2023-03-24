import propTypes from 'prop-types';

const Page = ({ children, cool }) => (
	<div>
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
