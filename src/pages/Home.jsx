import React, { useEffect, useState } from 'react'
import { Container, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/hero-section.css'
import '../styles/home.css'

import menuToSearch from '../assets/fake-data/menuToSearch'

import info from '../assets/fake-data/info.js'

import CarouselSlider from '../components/Carousel/CarouselSlider'
import SubCarouselSlider from '../components/Carousel/SubCarouselSlider'
import Menu from '../components/UI/menu/Menu'
import Form from '../components/Form/Form'
import CollapseMenu from '../components/CollapseMenu/CollapseMenu'
import { menu, name_list_menu, thuc_uong, loai_thuc_uong } from '../assets/fake-data/menu'

import { useTranslation } from 'react-i18next';

const Home = () => {
  const [hotPizza, setHotPizza] = useState([])
  const [infomation, setInfomation] = useState(info)

  useEffect(() => {
    const filteredPizza = menuToSearch.filter((i) => i.cate === 'ghe')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  const { t } = useTranslation();


  return (
    <Helmet title="Home">
      <CarouselSlider />
      <section id="gioi-thieu"></section>
      <section className='hero_info'>
        <Container>
          <div className="hero">
            <div class="hero__content">
              {
                infomation?.map((i, index) => (
                  <div className="hero__content" key={index}>
                    {/* <h5>&#127754; {i.title}</h5> */}
                    <h5>&#127754; {t('info.info_desc_1')}</h5>
                    <ul className="hero__content-info">
                      <li>&#10024; {i.title_2}</li>
                      <li>&#10024; {i.title_3}</li>
                      <li>&#10024; {i.title_4}</li>
                      <li>&#10024; {i.title_5}</li>
                    </ul>

                    <div className="hero__btns d-flex align-items-center gap-5">
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="hero__img">
              <div>
                <SubCarouselSlider />
              </div>

            </div>
          </div>
        </Container>
      </section>

      <div id='mon-ban-chay'></div>
      <section className="pt-0" >
        {/* <Col lg='12' className='text-center'>
        </Col> */}
        <Menu />
      </section>

      <div>
        <CollapseMenu menu={menu.ca} name_list_menu={name_list_menu.cate_ca} />

        <CollapseMenu menu={menu.cahap} name_list_menu={name_list_menu.cate_cahap} />

        <CollapseMenu menu={menu.ghe} name_list_menu={name_list_menu.cate_ghe} />

        <CollapseMenu menu={menu.oc} name_list_menu={name_list_menu.cate_oc} />

        <CollapseMenu menu={menu.mongtay} name_list_menu={name_list_menu.cate_mongtay} />

        <CollapseMenu menu={menu.lau} name_list_menu={name_list_menu.cate_lau} />

        <CollapseMenu thuc_uong={thuc_uong} name_list_menu={name_list_menu.cate_thuc_uong} loai_thuc_uong={loai_thuc_uong} />
      </div>

      {/* <div>
        <div className="parallax">
          <div className='parallax_content'>
            <div className="parallax_content-title">
              <h3>Thức uống</h3>
            </div>
            <Container>
              <Row>
                <Col lg='6' md='6'>
                  <div className='parallax_content-item'>
                    <ul>
                      <li>Bia - (Thùng, Két, Lốc, Lon)
                        <ul>
                          <li>Tiger</li>
                          <li>Heineken</li>
                          <li>333</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg='6' md='6'>
                  <div className='parallax_content-item'>
                    <ul>
                      <li>Rượu - (Chai)
                        <ul>
                          <li>Vodka</li>
                          <li>Gin</li>
                          <li>Vermouth</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg='6' md='6'>
                  <div className='parallax_content-item'>
                    <ul>
                      <li>Nước ngọt - (Thùng, Két, Lốc, Lon)
                        <ul>
                          <li>Coca</li>
                          <li>Pepsi</li>
                          <li>7Up</li>
                        </ul>
                      </li>
                      <li>Nước lọc - (Chai)</li>
                    </ul>
                  </div>
                </Col>

              </Row>
            </Container>
          </div>
        </div>
      </div> */}

      <section id="sanh-tiec"></section>
      <section className='hero_info'>
        <Container>
          <div className="hero">
            <div class="hero__content">
              {
                infomation?.map((i, index) => (
                  <div className="hero__content" key={index}>
                    <h5 className='hero__content-lobby-title'>{t('info.intro_lobby_title')}</h5>
                    <ul className="hero__content-info">
                      <li className="hero__content-info-lobby">{i.intro_lobby}</li>
                    </ul>

                    <div className="hero__btns d-flex align-items-center gap-5">
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="hero__img">
              <div>
                <SubCarouselSlider />
              </div>

            </div>
          </div>
        </Container>
      </section>

      <section id="dat-ban">
        <Form />
      </section>

    </Helmet>
  )
}

export default Home