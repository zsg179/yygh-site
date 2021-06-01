import request from '@/utils/request'

const api_name = `/api/hosp/hospital`

export default {
    //分页查询医院列表
    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/findHospList/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },

    //根据医院名称查询
    getByHosname(hosname) {
        return request({
            url: `${api_name}/findByHosName/${hosname}`,
            method: 'get'
        })
    },
    //根据医院编号获取医院预约挂号详情
    show(hoscode) {
        return request({
            url: `${api_name}/findHospDetail/${hoscode}`,
            method: 'get'
        })
    },
    //根据医院编号获取科室
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    }

}