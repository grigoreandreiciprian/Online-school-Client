export default class Data{

    api(path, method = 'GET', body= null, token = null){

         const url="http://localhost:3011/api/v1"+path
    
        const options={
            method,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },

    
        };
    
        if(body !=null){
            options.body = JSON.stringify(body);
        }
    
        // pentru perimisuni in functie de utilizator
        if(token){
            options.headers['Authorization']= `Bearer ${token}`;
        }
    
        return fetch( url, options);
    }

    async getCourses(token){

        let response = await this.api("/courses", 'GET',null,token)




        return response.json()
    }


    async addCourse(course){

        let response = await this.api("/courses",'POST',course)

        if(response.status==204){
            return []
        }
    }


    async addStudent(student){
        let response= await this.api("/users",'POST',student)

        if(response.status==204){
            return []
        }
    }


    async deleteCourse(course){
        let response= await this.api(`/courses/${course.id}`,'DELETE',course)

        return response
    }


    async updateCourse(course){
        let response = await this.api(`/courses/${course.id}`, 'PUT',course)

        return response
    }


    async logIn (student) {

        let response= await this.api('/users/log', 'POST',student)

       
        let data = await response.json();

        

        return data
    }


    async addEnrolment (enrolment){

        let response = await this.api("/enrolment", 'POST', enrolment)
    }


    async getEnrolment(){

        let response = await this.api("/enrolment", 'GET')

        return response.json()
    }


    async deleteEnrolment(enrolment){

        let response = await this.api(`/enrolment/${enrolment.id}`, 'DELETE', enrolment)

        return response
    }
}


// {password:'22222', email: "stacy.smith@exemplu.comm"}