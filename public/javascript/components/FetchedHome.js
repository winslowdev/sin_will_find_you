// APP > MAIN > #

class FetchedHome extends React.Component {
    render() {
        return (
            // CONTAINS ALL MEDIA SECTIONS
            <div className="auto-fetched">

                {/* =================== PODCASTS =================== */}

                <div className="media-section">
                    <div className="section-title">
                        <h2>Podcasts</h2>

                        {(this.props.isMorePodcasts)
                            ? <h2 className="slider-title pointer"
                                onClick={() => { { this.props.showMorePodcasts() } }}
                                onMouseLeave={() => { { this.props.toggleMorePodcasts() } }}>More</h2>
                            : null
                        }

                        <img src="../css/images/icon-more.png"
                            onMouseOver={() => { { this.props.toggleMorePodcasts() } }} />
                    </div>

                    {(this.props.homePodcasts)
                        ? <HomePodcasts
                            homePodcasts={this.props.homePodcasts} />
                        : null
                    }
                </div>

                {/* =================== SERIES =================== */}

                <div className="media-section">
                    <div className="section-title">
                        <h2>TV & Movies</h2>

                        {(this.props.isMoreSeries)
                            ? <h2 className="slider-title pointer"
                                onClick={() => { { this.props.showMoreSeries() } }}
                                onMouseLeave={() => { { this.props.toggleMoreSeries() } }}>More</h2>
                            : null
                        }

                        <img src="../css/images/icon-more.png"
                            onMouseOver={() => { { this.props.toggleMoreSeries() } }} />
                    </div>

                    {(this.props.homeSeries)
                        ? <HomeSeries
                            homeSeries={this.props.homeSeries} />
                        : null
                    }
                </div>

                {/* =================== YOUTUBE =================== */}

                <div className="media-section">
                    <div className="section-title">
                        <h2>YouTube</h2>

                        {(this.props.isMoreYoutubes)
                            ? <h2 className="slider-title pointer"
                                onClick={() => { { this.props.showMoreYoutubes() } }}
                                onMouseLeave={() => { { this.props.toggleMoreYoutubes() } }}>More</h2>
                            : null
                        }

                        <img src="../css/images/icon-more.png"
                            onMouseOver={() => { { this.props.toggleMoreYoutubes() } }} />
                    </div>

                    {(this.props.homeYoutubes)
                        ? <HomeYoutubes
                            homeYoutubes={this.props.homeYoutubes} />
                        : null
                    }
                </div>

            </div>
        )
    }
}