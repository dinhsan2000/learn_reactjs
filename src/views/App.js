import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Category from './Categories/Category';
import Dashbroad from './Dashbroads/Dashbroad';
import { Breadcrumb, Layout, Menu } from 'antd';
import logo from './logo.svg';
import 'antd/dist/reset.css';
import './App.scss';
import {
  HomeOutlined, ShopOutlined, ShoppingCartOutlined, AppstoreOutlined, UserOutlined, ToolOutlined, TeamOutlined,PlusCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    label: "Dashbroad",
    key: '/',
    icon: <HomeOutlined />
  },
  {
    label: "List Category",
    key: '/category',
    icon: <ShopOutlined />,
    children: [ 
      {
        label:"Create Category",
        key:'/create-category',
        icon: <PlusCircleOutlined />
      },
    ]
  },
  {
    label: "List Product",
    key: '/product',
    icon: <AppstoreOutlined />
  },
  {
    label: "List Cart",
    key: '/cart',
    icon: <ShoppingCartOutlined />
  },
  {
    label: "Me",
    key: '/setting',
    icon: <UserOutlined />
  },
  {
    label: "List User",
    key: '/user',
    icon: <TeamOutlined />
  },
  {
    label: "Setting Website",
    key: '/setting',
    icon: <ToolOutlined />
  }

]
function App() {
  return (
    <div className="App">
        <SideMenu />
        <Dashbroad />
    </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();
  return (

    <Layout
      style={{
        minHeight: '100vh',
      }}>
      <Sider collapsedWidth="0" breakpoint="sm">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu theme="dark" mode="inline" onClick={({ key }) => { navigate(key) }} items={items}>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item href='/'> Home</Breadcrumb.Item>
            <Breadcrumb.Item href='/category'>Bill</Breadcrumb.Item>
            <Breadcrumb.Item href='/category'>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
            <Contents />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', }}>
        Copyright ©{new Date().getFullYear()} Created by Dinh Trong San
        </Footer>
      </Layout>
    </Layout>
  );
}
function Contents() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashbroad />}></Route>
        <Route path='/category' element={<Category />}></Route>
      </Routes>
    </div>
  );
}

export default App;
