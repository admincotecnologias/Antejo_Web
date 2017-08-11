

const React = require('react');

const ResumePropTypes = require('../prop_types/resume');
const SocialMedia = require('./social_media');

const Banner = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics
    },

    render: function () {
        return (
            <div className='row banner widget'>
              <div className="blur"></div>
                <div className='banner-text'></div>
                </div>
        );
    }
});

module.exports = Banner;
