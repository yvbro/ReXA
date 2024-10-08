package fr.yvbro.rexa.security

import fr.yvbro.rexa.exception.RexaException
import org.springframework.stereotype.Component
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

@Component
class AESEncryptionDecryption {

    fun prepareSecreteKey(myKey: String) {
        val sha: MessageDigest?
        try {
            key = myKey.toByteArray(StandardCharsets.UTF_8)
            sha = MessageDigest.getInstance("SHA-1")
            key = sha.digest(key)
            key = Arrays.copyOf(key, 16)
            secretKey = SecretKeySpec(key, ALGORITHM)
        } catch (e: NoSuchAlgorithmException) {
            throw RexaException("500", "Error while preparing key: $e")
        }
    }

    fun encrypt(strToEncrypt: String, secret: String): String {
        try {
            prepareSecreteKey(secret)
            val cipher: Cipher = Cipher.getInstance(ALGORITHM)
            cipher.init(Cipher.ENCRYPT_MODE, secretKey)
            return Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.toByteArray(charset("UTF-8"))))
        } catch (e: Exception) {
            throw RexaException("500", "Error while encrypting: $e")
        }
    }

    fun decrypt(strToDecrypt: String?, secret: String): String {
        try {
            prepareSecreteKey(secret)
            val cipher: Cipher = Cipher.getInstance(ALGORITHM)
            cipher.init(Cipher.DECRYPT_MODE, secretKey)
            return String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)))
        } catch (e: Exception) {
            throw RexaException("500", "Error while decrypting: $e")
        }
    }

    companion object {
        private var secretKey: SecretKeySpec? = null
        private lateinit var key: ByteArray
        private const val ALGORITHM = "AES"
    }
}
