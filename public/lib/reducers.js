/*
 * Copyright (C) 2016 Anthony DeDominic <anthony@dedominic.pw>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = {
    enableModal: (data, state) => {
        return Object.assign({}, state, { 
            modalForm: data,
            modalActive: true
        })
    },
    cancelModal: (data, state) => {
        return Object.assign({}, state, { 
            modalForm: {},
            modalActive: false
        })
    },
    modalFormChange: (data, state) => {
        var newModal = Object.assign({}, state.modalForm, data)
        return Object.assign({}, state, { modalForm: newModal })
    },
    modalFormExtraChange: (data, state) => {
        var newModal = Object.assign({}, state.modalForm.extra_vars, data)
        newModal = Object.assign({}, state.modalForm, { extra_vars: newModal })
        return Object.assign({}, state, { modalForm: newModal })
    },
    modalExtraDelete: (data, state) => {
        var newModal = Object.assign({}, state.modalForm, null)
        delete newModal.extra_vars[data]
        return Object.assign({}, state, { modalForm: newModal })
    },
    modalExtraAdd: (data, state) => {
        var newModal = Object.assign({}, state.modalForm, null)
        if (!newModal.extra_vars) newModal.extra_vars = {}
        newModal.extra_vars[data] = ''
        return Object.assign({}, state, { modalForm: newModal })
    },
    filterChange: (data, state) => {
        return Object.assign({}, state, { filter: data })
    },
    filterTargetChange: (data, state) => {
        return Object.assign({}, state, { filterTarget: data })
    },
    failFilterChange: (data, state) => {
        return Object.assign({}, state, { failFilter: data })
    },
    statusChange: (data, state) => {
        return Object.assign({}, state, { status: data })
    },
    hostChange: (data, state) => {
        return Object.assign({}, state, { hosts: data })
    },
    serviceChange: (data, state) => {
        return Object.assign({}, state, { services: data })
    },
    errorBanner: (data, state) => {
        return Object.assign({}, state, { 
            bannertype: 'danger', banner: data
        }) 
    },
    okBanner: (data, state) => {
        return Object.assign({}, state, { 
            bannertype: 'success', banner: data 
        })
    },
    clearBanner: (data, state) => {
        return Object.assign({}, state, {
            bannertype: 'info', banner: ''
        })
    }
}
