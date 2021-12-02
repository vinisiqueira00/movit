import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';

import UserIcon from '../../assets/icons/user.svg';
import RobotIcon from '../../assets/icons/robot.svg';

export default function Home() {
    const onPressProfileBtn = () => {
        console.log("Pressed button profile");
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.picture}>
                        <UserIcon style={styles.pictureIcon} />
                    </View>
                    <Text style={styles.welcomeText}>
                        Olá, <Text style={styles.welcomeTextBold}>Desconhecido!!</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.contentMessages}>
                        <View style={styles.firstMessageGroup}>
                            <View style={styles.messageUser}>
                                <RobotIcon width="28" height="22" color="#fefefe"/>
                            </View>
                            <View style={styles.messageList}>
                                <View style={styles.firstMessageItem}>
                                    <Text style={styles.messageText}>Hm, ainda não te conheço! De qualquer forma, seja bem-vindo! Eu sou o Bot que te acompanharei quando necessário.</Text>
                                </View>
                                <View style={styles.messageItem}>
                                    <Text style={styles.messageText}>Essa é a tela inicial, aqui você pode escolher criar um servidor ou entrar em um já existente, mas para essa segunda opção necessita saber o identificador do servidor.</Text>
                                </View>
                                <View style={styles.messageItem}>
                                    <Text style={styles.messageText}>Contudo, primeiramente, para usar o app e tudo que ele ofereçe, você deverá completar seu cadastro, a fim de sabermos um pouco de você =D</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.messageGroup}>
                            <View style={styles.messageUser}>
                                <RobotIcon width="28" height="22" color="#fefefe"/>
                            </View>
                            <View style={styles.messageList}>
                                <View style={styles.firstMessageItem}>
                                    <Text style={styles.messageText}>Para completar, basta clicar no botão abaixo que você será encaminhado para a sessão de perfil. Lembre-se, capriche nos detalhes, sempre fica mais empolgante ver séries e filmes com pessoas que conhecemos um pouco ;D</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contentPhrase}>
                        <Text style={styles.phraseText}>É necessário que o perfil esteja preenchido, pois dados como nome, idade e uma foto (que é bacana) é usado nos servidores para te identificar.</Text>
                    </View>

                    <View style={styles.contentButtonProfile}>
                        <Button
                            onPress={onPressProfileBtn}
                            title="Temp"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0,
        backgroundColor: '#212121',
    },
    header: {
        width: '100%',
        height: 'auto',
        paddingVertical: 40,
        paddingHorizontal: 30,
        backgroundColor: '#303030',
    },
    picture: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 100,
        height: 100,
        padding: 0,
        margin: 0,
        backgroundColor: '#F08C2F',
        borderRadius: 100,
        overflow: 'hidden',
    },
    pictureIcon: {
        width: 64,
        height: 74,
        padding: 0,
        margin: 0,
        color: 'rgba(254, 254, 254, 0.7)',
    },
    welcomeText: {
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0,
        marginTop: 25,
        fontFamily: 'RobotoRegular',
        fontSize: 25,
        lineHeight: 27,
        color: '#fefefe',
    },
    welcomeTextBold: {
        fontFamily: 'RobotoBlack',
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 60,
        margin: 0,
    },
    contentMessages: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0,
    },
    messageGroup: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        margin: 0,
        marginTop: 15,
        padding: 0,
    },
    firstMessageGroup: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        margin: 0,
        padding: 0,
    },
    messageUser: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        padding: 0,
        margin: 0,
        backgroundColor: '#FF2E5E',
        borderRadius: 100,
    },
    messageList: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0,
        marginLeft: 15,
    },
    messageItem: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 270,
        maxWidth: '100%',
        height: 'auto',
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#303030',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    firstMessageItem: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 270,
        maxWidth: '100%',
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#303030',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    messageText: {
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0,
        fontFamily: 'RobotoRegular',
        fontSize: 15,
        lineHeight: 18,
        color: '#fefefe',
    },
    contentPhrase: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        margin: 0,
        marginTop: 45,
        padding: 0,
        paddingHorizontal: 30,
    },
    phraseText: {
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0,
        fontFamily: 'RobotoRegular',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        color: '#AAAAAA',
    },
    contentButtonProfile: {

    },
    buttonProfile: {

    }
});
