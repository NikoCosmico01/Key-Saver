echo Inizio
(cd C:/Users/NicoT/Desktop/GitHub/Key-Saver-New/client; npm run build)

BACK_PID=$!

while kill -0 $BACK_PID ; do
    echo "Processo in Esecuzione"
    sleep 1
done

mv -v C:/Users/NicoT/Desktop/GitHub/Key-Saver-New/client/build/* C:/Users/NicoT/Desktop/GitHub/Key-Saver-New/client/public/*

echo Fatto!