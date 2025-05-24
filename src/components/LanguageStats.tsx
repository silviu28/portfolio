import React, {useEffect, useState} from "react";
import findMentions from "../utility/findMentions.ts";

const LanguageStats: React.FC = () => {
    const [counts, setCounts] = useState<number[]>([]);
    useEffect(() => {
        const result = findMentions();
        setCounts(result);
    }, []);

    return (
        <p>
            C#: {counts[0]}, Java: {counts[1]}, JS/TS: {counts[2]}, Python: {counts[3]}
        </p>
    )
}

export default LanguageStats;