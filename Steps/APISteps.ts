import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { assert, expect } from 'chai';
import fs from 'fs';

var response: AxiosResponse;
var endpoint: string;
var fileName: string, bufferData: any, requestBody: any;

export class APIMethods {
  
    async getAxiosInstance() {
        let base: string = 'https://jsonplaceholder.typicode.com/';
       
        return axios.create({
            baseURL: base,
            timeout: 0,
            headers: {
                "Content-Type": "application/json"
            }
            
        })
    }

    async axiosPost(axiosInstance: AxiosInstance, endpoint: string, requestBody: any) {
        try {
            response = await axiosInstance.post(endpoint, requestBody);
            return response;
        } catch (error: any) {
            assert.fail("\Request Failed for endpoint : " + endpoint + "\nReason : " + JSON.stringify(error.response.data));
        }
    }

    // PUT method, provide instance, endpoint and request body
    async axiosPut(axiosInstance: AxiosInstance, endpoint: string, requestBody: any) {
        try {
            response = await axiosInstance.put(endpoint, requestBody);
            return response;
        } catch (error: any) {
            assert.fail("\Request Failed for endpoint : " + endpoint + "\nReason : " + JSON.stringify(error.response.data));
        }
    }

    // Delete method, provide instance and endpoint 
    async axiosDelete(axiosInstance: AxiosInstance, endpoint: string ) {
        try {
            response = await axiosInstance.delete(endpoint);
            return response;
        } catch (error: any) {
            assert.fail("\Request Failed for endpoint : " + endpoint + "\nReason : " + JSON.stringify(error.response.data));
        }
    }
    // Get method, provide instance, endpoint and request body
    async axiosGet(axiosInstance: AxiosInstance, endpoint: string, requestBody: any) {
        try {
            response = await axiosInstance.get(endpoint);
            return response;
        } catch (error: any) {
            assert.fail("\Request Failed for endpoint : " + endpoint + "\nReason : " + JSON.stringify(error.response.data));
        }
    }



    async postSample() {
        fileName = './testdata/SampleData.Json';
        bufferData = fs.readFileSync(fileName);
        requestBody = JSON.parse(bufferData);
        endpoint = 'posts/';
        var response = await this.axiosPost(await this.getAxiosInstance(), endpoint, requestBody);
        expect(response?.status, 'Post Response is 201').to.equal(201);
        let value = response?.data.id;
        console.log(value);
        expect(response?.data.id).to.equal(value);
        return response;
    }

    async putSample() {
        fileName = './testdata/SampleData.Json';
        bufferData = fs.readFileSync(fileName);
        requestBody = JSON.parse(bufferData);
        endpoint = '/posts/1';
        var response = await this.axiosPut(await this.getAxiosInstance(), endpoint, requestBody);
        expect(response?.status, 'Post Response is 200').to.equal(200);
        let value = response?.data.id;
        console.log(value);
        expect(response?.data.id).to.equal(value);
        return response;
    }

    async getSample() {
        endpoint = '/posts/1/comments';
        var response = await this.axiosGet(await this.getAxiosInstance(), endpoint, requestBody);
        expect(response?.status, 'Post Response is 200').to.equal(200);
        let value = response?.data.id;
        console.log(value);
        expect(response?.data.id).to.equal(value);
        return response;
    }

   
}