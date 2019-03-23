import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Copyrights } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
<<<<<<< HEAD
		<PanelHeader>Антивирусное ПО компании G </PanelHeader>
=======
		<PanelHeader>Антивирусное ПО компании G Data</PanelHeader>
>>>>>>> 091860a007c08bc2e20e78ea61e181ded1878902
		{fetchedUser &&
		<Group title="Пользователькие данные">
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</ListItem>
		</Group>}

<<<<<<< HEAD
		<Group title="Приложение в разработке, дождитесь пока мы работаем">
=======
		<Group title="Приложение в разработке, дождитесь пока мы работаем!">
>>>>>>> 091860a007c08bc2e20e78ea61e181ded1878902
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
