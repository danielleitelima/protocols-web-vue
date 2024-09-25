import { createRouter, createWebHistory} from "vue-router";

import Home from "../view/Home.vue";
import SignIn from "../view/SignIn.vue";

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "Home",
                component: Home,
                meta: {
                    requiresAuthentication: true
                }
            },
            {
                path: "/signIn",
                name: "Sign In",
                component: SignIn,
                beforeEnter: (__, _, next) => {
                    const token = localStorage.getItem('token');
                    if (token) {
                        next('/');
                    } else {
                        next();
                    }
                }
            },
        ]
    }
)

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuthentication) {
        const token = localStorage.getItem('token');
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});


export default router;