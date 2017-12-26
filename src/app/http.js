import _extend from 'lodash/extend'

export default class Http {

    constructor($resource, url, resourceParams, defaultQueryParams = {}) {
        'ngInject'

        this.resourceParams = resourceParams || {
            query: {
                method: 'GET',
                isArray: true,
                interceptor: {
                    response(response) {
                        response.resource.$httpHeaders = response.headers
                        return response.resource
                    }
                }
            },
            update: {
                method: 'PUT'
            },
            patch: {
                method: 'PATCH'
            }
        }

        this._$resource = $resource(`${url}/:id`, { id: '@id' }, this.resourceParams)
        this.defaultQueryParams = defaultQueryParams
    }

    get(id, queryParams = {}) {
        return this._$resource.get(_extend({ id }, queryParams, this.defaultQueryParams)).$promise
    }

    getAll(queryParams = {}) {
        return this._$resource.query(_extend(queryParams, this.defaultQueryParams)).$promise
    }

    getBy(queryParams = {}) {
        return this._$resource.query(_extend(queryParams, this.defaultQueryParams)).$promise
    }

    post(model) {
        return this._$resource.save(model).$promise
    }

    update(model) {
        return this._$resource.update({ id: model.id }, model).$promise
    }

    patch(id, attributes) {
        return this._$resource.patch({ id }, attributes).$promise
    }

    delete(id) {
        return this._$resource.delete({ id }).$promise
    }
}
