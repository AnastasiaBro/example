import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import './People.css';

let baseURL = 'https://swapi.co/api/people?page=1';
localStorage.setItem('next', 1);
//let url = '';

class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
            hasMoreItems: true,
            nextHref: this.props.next
        }
    }

    loadContent () {
        console.log('-------------------------------------');
        this._isMounted = true;
        let url = baseURL;
        let self = this;

        //console.log(baseURL);
        //console.log(this.state.nextHref);
        console.log(url);

        if (localStorage.getItem('next') != 1) {

            url = 'https://swapi.co/api/people?page=' + localStorage.getItem('next');
            console.log('ссылка изм', url);

        }

        fetch(url)
        .then( (response) => {
            return response.json() })   
                .then( (json) => {

                        var list = this.state.data;                        
                        json.results.map(data => {
                            list.push(data);
                        });
                        
                        console.log(json.count,  '>' , (Number(localStorage.getItem('next'))) * 10);
                        console.log(list);

                    if (json.count > (localStorage.getItem('next') * 10)) {
                        console.log(this.state.data.length, localStorage.getItem('next') * 10);
                        

                       
                            localStorage.setItem('next', Number(localStorage.getItem('next')) + 1);
                            url = 'https://swapi.co/api/people?page=' + localStorage.getItem('next');
                            console.log(url);

                            self.setState({
                                data: list
                            });
                            //this.loadContent();
                        
                        console.log('ссылка изменилась?', localStorage.getItem('next'));
                    } else {
                        this.setState({
                            hasMoreItems: false
                        });
                    }
                    console.log(this.state.data);

                })
                .catch(error => console.log('err ' + error));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this.loadContent();
        this._isMounted = true;
    }

    render () {
        const loader = <div className="loader">Загрузка...</div>;
        console.log(this.state.data);
        let items = null;

        if (this.state.data !== undefined) {
            let results = this.state.data;

            items = results.map(item => {
                return <div className="item"
                        key={item.created}
                        >{item.name}</div>
            });

            return (
                <div>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadContent.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}
                        key={this.props.id}
                        >
                            <ul className="product__list" onScroll={event => this.onScrollList(event)} transition="ease 0.5s" >{items}</ul>
                    </InfiniteScroll>
                </div>
            );
        } else {
            return (
                <div className="spinner">Загрузка...</div>
            );
        }
    }
}

export default People;