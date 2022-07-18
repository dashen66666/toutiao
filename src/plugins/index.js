import { Toast, Picker, Button, Tabbar, TabbarItem, NavBar, Icon, Form, Field, Tab, Tabs, Cell, CellGroup } from 'vant';
const plugin = [Toast, Picker, Form, Field, Button, Tabbar, TabbarItem, NavBar, Icon, Tab, Tabs, Cell, CellGroup]
export default function getPlugin(app) {
    plugin.forEach(item => {
        return app.use(item)
    })
}