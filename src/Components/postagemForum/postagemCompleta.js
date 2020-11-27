import React from 'react';
import AvatarUser from '../AvatarUser/AvatarUser';
import HeaderTitle from './headerTitle';
import { View, Image } from 'react-native';

export default () => {
    
    return(
        <View style={styles.container}>

            <AvatarUser />
            
            <HeaderTitle />

            <Text style={styles.denunciaTxt}>
                Nos últimos anos, as queimadas no Pantanal vêm aumentando significativamente por diversos motivos, dos quais os mais comum são as causas humanas, sejam acidentais, sejam criminosas. Pelo menos três fatores provocam o avanço dessas práticas, são eles: o aumento das atividades agrícolas e pecuaristas; a ação humana ou antrópica; o clima tropical aliado ao tempo seco. As queimadas e o desmatamento são práticas comumente interligadas, pois realiza-se o desmatamento de áreas, para formação de pastagens, e faz-se a queimada, na tentativa de adubagem e preparo do solo para formação dos pastos. Essas práticas geram resultados nocivos à saúde humana e perda da biodiversidade animal e vegetal da Terra.
            </Text>
            
            <Text style={styles.headerText}>
                Queimadas no Pantanal
            </Text>

            <Text style={styles.denunciaTxt}>
                O Pantanal é um bioma localizado em três países:
                Brasil
                Bolívia
                Paraguai
                Apresenta floresta densa, hidrografia complexa e bastante umidade. Tem como característica central as áreas de inundação, com relevo plano e formação de lagos. É um bioma rico em biodiversidade de fauna e flora, reconhecido mundialmente. No Brasil, esse bioma localiza-se a Sudoeste do Mato Grosso e Noroeste do Mato Grosso do Sul.
            </Text>

            <Image
                source={require('../../assets/Img-material.jpg')}
                style={style.imgMateria}
            />

            <Text style={styles.denunciaTxt}>
                Nos últimos anos, as queimadas no Pantanal vêm aumentando significativamente por diversos motivos, dos quais os mais comum são as causas humanas, que podem ser acidentais ou criminosas.
                Segundo o Instituto Nacional de Pesquisas Espaciais (Inpe), as queimadas na região do Pantanal brasileiro aumentaram 210% em 2020, quando comparado ao mesmo período do ano de 2019. Considerando o período de janeiro a setembro de 2019, foram registrados 4660 focos de incêndio, em 2020, foram registrados 14.489 focos. Até então, o recorde era de 12.536 focos de incêndio, no ano de 2015, fato esse superado nos sete primeiros meses de 2020.
                Essas práticas estão ligadas às atividades econômicas da agricultura e pecuária, sendo realizadas geralmente por sociedades tradicionais, indígenas e pequenos agricultores, na tentativa de adubagem do solo por meio das cinzas oriundas dessas atividades. No Pantanal, a situação não é diferente do habitual, uma vez que houve avanços nas áreas de plantio e pastagem decorrentes do aumento das atividades econômicas na região.
            </Text>

            <TouchableOpacity>
                <Text style={styles.lerMais}>Ler Mais</Text>
            </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        paddingBottom: 10,
        borderRadius: 5,
        elevation: 5
    },
    userTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 60,
        paddingTop: 15,
        paddingBottom: 10,
    },
    denunciaTxt: {
        fontSize: 13,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'justify'
    },
    lerMais: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: 15
    },
    headerText: {
        fontWeight: 'bold'
    },
    imgMateria: {  
        
    }
});