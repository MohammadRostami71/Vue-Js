import {createRouter, createWebHistory} from 'vue-router';


import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from "./pages/TeamsFooter";
import UsersFooter from "./pages/UsersFooter";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {
            name: 'teams',
            path: '/teams',
            meta: {needAuth: true},
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
                {name: 'team-members', path: ':teamId', component: TeamMembers, props: true},
            ]
        }, // our-domain.com/teams => TeamsList
        {
            path: '/users', components: {default: UsersList, footer: UsersFooter},
            beforeEnter(to, from, next) {
                console.log('----');
                console.log(to, from);
                next();
            }
        },

        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return {left: 0, top: 0};
    }
});
router.beforeEach(function (to, from, next) {
    console.log('++');
    console.log(to, from);
    if (to.meta.needAuth) {
        console.log('need Auth!');
        next();
    } else {
        next();
    }
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({name: 'team-members', params: {teamId: 't2'}});
    // }
    next();
});
router.afterEach(function (to, from) {
    console.log(to, from);
    // send data to server
});

export default router;