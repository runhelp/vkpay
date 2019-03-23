import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Copyrights } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Антивирусное ПО компании G Data</PanelHeader>


		<Group title="Приложение в разработке, дождитесь пока мы работаем!">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Пожалуйста покажите мне Персика
				</Button>
			</Div>
		</Group>

		<Group copyrights="Группа компаний Бегущая Помощь">
			<Div>
					Антивирусное программное обеспечение от группы компаний Бегущая Помощь, работаем по всей России.
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
