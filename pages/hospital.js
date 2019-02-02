import React, { Component }from 'react';
import { Button,Icon, Form, Container,Divider,Label } from 'semantic-ui-react'
import Layout from '../common/Layout';
import Header from '../common/Header';

class Hospital extends Component{
    state = {
        address: '',
        lat: '',
        long: '',
        phone: '',
        capacity: '',
        avalibility: '',
        loading: false
    };
    componentDidMount() {

    }
    onSubmit = () => {
      this.setState({loading: true});

      
    };

    render() {
        return (
            <Layout>
                <Container style={{padding:10}} >
                <Form >
                    <Form.Field >
                        <input type='text' focus placeholder='Phone no' onChange={(e) => {this.setState({phone: e.target})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'  focus placeholder='Address' onChange={(e) => {this.setState({address: e.target})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'focus placeholder='Latitude' onChange={(e) => {this.setState({lat: e.target})}}/>
                    </Form.Field>

                    <Form.Field >
                        <input type='text' focus placeholder='Longitude' onChange={(e) => {this.setState({long: e.target})}}/>
                    </Form.Field>

                    <Form.Field >
                        <input type='text' focus placeholder='Availability' onChange={(e) => {this.setState({avalibility: e.target})}}/>
                    </Form.Field>

                </Form>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                    <Button
                        primary
                        size='big'
                        loading={this.state.loading}
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                </div>
                </Container>
            </Layout>
        );
    }
};
export default Hospital