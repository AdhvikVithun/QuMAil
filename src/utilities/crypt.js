import {securityLevel} from '../components/Header/Header';
const CryptoJS = require("crypto-js");


export function encrypt(message, chat_room_name) {

    if (securityLevel === 'level1') {

        const secret_key_from_env = "jn3ej23nu234hnr87ucnsnejsnf843nfu4n3dfsenjf"
        const key = CryptoJS.enc.Utf8.parse(chat_room_name + secret_key_from_env);

        // Create PKCS7 padding
        const blockSize = 16;
        const padding = blockSize - (message.length % blockSize);
        const paddedMessage = CryptoJS.enc.Utf8.parse(message + String.fromCharCode(padding).repeat(padding));
    
        // Encrypt plaintext
        const encrypted = CryptoJS.AES.encrypt(paddedMessage, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding, // Remove padding
        });
        return encrypted.toString();

    } else if (securityLevel === 'level2') {

        const secret_key_from_env = "jn3ej23nu234hnr87ucnsnejsnf843nfu4n3dfsenjf"
        const key = CryptoJS.enc.Utf8.parse(chat_room_name + secret_key_from_env);

        // Create PKCS7 padding
        const blockSize = 16;
        const padding = blockSize - (message.length % blockSize);
        const paddedMessage = CryptoJS.enc.Utf8.parse(message + String.fromCharCode(padding).repeat(padding));
    
        // Encrypt plaintext
        const encrypted = CryptoJS.AES.encrypt(paddedMessage, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding, // Remove padding
        });
        return encrypted.toString();

    } else if (securityLevel === 'level3') {
 
        const secret_key_from_env = "jn3ej23nu234hnr87ucnsnejsnf843nfu4n3dfsenjf"
        const key = CryptoJS.enc.Utf8.parse(chat_room_name + secret_key_from_env);

        // Create PKCS7 padding
        const blockSize = 16;
        const padding = blockSize - (message.length % blockSize);
        const paddedMessage = CryptoJS.enc.Utf8.parse(message + String.fromCharCode(padding).repeat(padding));
    
        // Encrypt plaintext
        const encrypted = CryptoJS.AES.encrypt(paddedMessage, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding, // Remove padding
        });
        return encrypted.toString();

    } else {
        
        const secret_key_from_env = "jn3ej23nu234hnr87ucnsnejsnf843nfu4n3dfsenjf"
        const key = CryptoJS.enc.Utf8.parse(chat_room_name + secret_key_from_env);

        // Create PKCS7 padding
        const blockSize = 16;
        const padding = blockSize - (message.length % blockSize);
        const paddedMessage = CryptoJS.enc.Utf8.parse(message + String.fromCharCode(padding).repeat(padding));
    
        // Encrypt plaintext
        const encrypted = CryptoJS.AES.encrypt(paddedMessage, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding, // Remove padding
        });
        return encrypted.toString();

    }

}

export function decrypt(encryptedMessage, chat_room_name) {

    // You can implement different decryption methods based on the securityLevel
    if (securityLevel === 'level1') {

        const secret_key_from_env = "jn3ej23nu234hnr87ucnsnejsnf843nfu4n3dfsenjf"
        const key = CryptoJS.enc.Utf8.parse(chat_room_name + secret_key_from_env);

        const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding, // Remove padding
        });
        
        //console.log("Decrypted (before stringify):", decrypted);
        
        // Remove padding
        const depaddedMessage = CryptoJS.enc.Utf8.stringify(decrypted);
        const padding = depaddedMessage.charCodeAt(depaddedMessage.length - 1);
    
        return depaddedMessage.slice(0, depaddedMessage.length - padding);

    } else if (securityLevel === 'level2') {
       
        const secret_key_from_env = "jn3ej23nu234hnr87ucnsnejsnf843nfu4n3dfsenjf"
        const key = CryptoJS.enc.Utf8.parse(chat_room_name + secret_key_from_env);

        const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding, // Remove padding
        });
    
        // Remove padding
        const depaddedMessage = CryptoJS.enc.Utf8.stringify(decrypted);
        const padding = depaddedMessage.charCodeAt(depaddedMessage.length - 1);
    
        return depaddedMessage.slice(0, depaddedMessage.length - padding);


    } else if (securityLevel === 'level3') {
       
        const secret_key_from_env = "jn3ej23nu234hnr87ucnsnejsnf843nfu4n3dfsenjf"
        const key = CryptoJS.enc.Utf8.parse(chat_room_name + secret_key_from_env);

        const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding, // Remove padding
        });
    
        // Remove padding
        const depaddedMessage = CryptoJS.enc.Utf8.stringify(decrypted);
        const padding = depaddedMessage.charCodeAt(depaddedMessage.length - 1);
    
        return depaddedMessage.slice(0, depaddedMessage.length - padding);


    } 

};
