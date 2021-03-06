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
    authRefresh: (send, done) => {
        send('testAuth', '', done)
        setInterval(() => {
            send('testAuth', '', done)
        }, 30000)
    },
    statusRefresh: (send, done) => {
        send('updateStatus', null, done)
        setInterval(() => {
            send('updateStatus', null, done)
        }, 30000)
    },
    hostRefresh: (send, done) => {
        send('getHosts', null, done)
        setInterval(() => {
            send('getHosts', null, done)
        }, 30000)
    },
    serviceRefresh: (send, done) => {
        send('getServices', null, done)
        setInterval(() => {
            send('getServices', null, done)
        }, 30000)
    }
}
