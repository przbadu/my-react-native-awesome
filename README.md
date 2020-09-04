### How to enable fingerprint in android emulator

Reference: https://developer.android.com/about/versions/marshmallow/android-6.0.html

- Goto settings -> security -> fingerprint
- setup your security pin (or any other primary authentication method)
- setup fingerprint, when your emulator ask you to tap fingerprint, run below command in terminal:

> NOTE: your android installation directory may be different, so make sure you run below
> command from your android installation directory

```sh
./Android/Sdk/platform-tools/adb -e emu finger touch <touchid>
```

__Example__

```sh
./Android/Sdk/platform-tools/adb -e emu finger touch 123456
```

And complete the fingerprint setup, that's It.