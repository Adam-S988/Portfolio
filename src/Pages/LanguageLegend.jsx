import React, { useState } from 'react';

const languageFamilyDetails = {
  Hellenic: `<strong>Languages:</strong> Greek<br>
    <strong>Geographical Area:</strong> Greece, Cyprus, and parts of the Aegean.<br>
    <strong>Extinct Languages:</strong> Mycenaean Greek, Ancient Greek (Classical, Koine).<br>
    <strong>Endangered Languages:</strong> Tsakonian (a modern Greek dialect).<br>
    <strong>Historical Context:</strong>
    The Hellenic family, dominated by Greek, has a documented history spanning over 3,500 years. Mycenaean Greek was used in the early Greek city-states. Ancient Greek developed into Classical and Koine forms, the latter serving as a lingua franca in the Hellenistic world. Modern Greek retains ties to its ancient predecessors.<br>
    <strong>Notes:</strong> The Hellenic language family is centered around Greek, with its history stretching back thousands of years. Ancient Greek was the language of classical philosophy, science, and literature, while modern Greek remains the official language of Greece and Cyprus.`,
  Anatolian: `<strong>Languages:</strong> Hittite, Luwian, Lydian, Lycian, and others [All extinct]<br>
    <strong>Geographical Area:</strong> Anatolia (modern-day Turkey)<br>
    <strong>Extinct Languages:</strong> Hittite, Luwian, Lycian, Lydian.<br>
    <strong>Endangered Languages:</strong> None, as the family is entirely extinct.<br>
    <strong>Historical Context:</strong>
    Anatolian languages were spoken in ancient Turkey and were among the first written Indo-European languages, with records dating back to the 2nd millennium BCE. The Hittite Empire was a major power in the ancient Near East. Anatolian languages disappeared around the 1st millennium BCE, replaced by Greek and other languages.<br>
    <strong>Notes:</strong> The Anatolian languages are an extinct branch of the Indo-European family, with the Hittite language being the most famous. The Hittites were an ancient civilization in the Near East.`,
  Celtic: `<strong>Languages:</strong> Irish, Scottish Gaelic, Welsh, Breton, Cornish, Manx<br>
    <strong>Geographical Area:</strong> Western Europe, particularly the British Isles, France (Brittany), and parts of Spain<br>
    <strong>Extinct Languages:</strong> Gaulish, Lepontic, Celtiberian, Pictish.<br>
    <strong>Endangered Languages:</strong> Cornish (revived), Manx (revived), Breton.<br>
    <strong>Historical Context:</strong>
    The Celtic language family once spread widely across Europe, from Iberia to Anatolia. It fragmented after Roman conquest and Germanic invasions. Today, Celtic languages are mainly confined to the British Isles and Brittany, France. Revival efforts in Cornwall and the Isle of Man have brought renewed interest in these languages.<br>
    <strong>Notes:</strong> The Celtic languages are characterized by unique syntactical and phonological features. The ancient Celts were known for their tribal societies, which later contributed to the formation of various European kingdoms.`,
  Germanic: `<strong>Languages:</strong> English, German, Dutch, Swedish, Danish, Norwegian, Icelandic, and others<br>
    <strong>Geographical Area:</strong> Northern and Western Europe, especially the UK, Germany, Scandinavia, and the Low Countries<br>
    <strong>Extinct Languages:</strong> Gothic, Vandalic, Burgundian.<br>
    <strong>Endangered Languages:</strong> Yiddish (partially), Scots (debated), Low German.<br>
    <strong>Historical Context:</strong>
    Originating from Proto-Germanic, the family split into East, North, and West Germanic branches. East Germanic languages, like Gothic, are extinct. Modern Germanic languages include some of the world's most spoken, such as English and German. Historically, Germanic tribes shaped medieval Europe after the fall of the Roman Empire.<br>
    <strong>Notes:</strong> The Germanic family is one of the most widely spoken language families globally. English, as a Germanic language, has become a global lingua franca, heavily influenced by Latin and French.`,
  Italic: `<strong>Languages:</strong> Latin, Italian, Spanish, French, Portuguese, Romanian, and others<br>
    <strong>Geographical Area:</strong> Southern and Western Europe, the Mediterranean, and parts of Eastern Europe<br>
    <strong>Extinct Languages:</strong> Latin (Classical and Vulgar), Oscan, Umbrian, Faliscan.<br>
    <strong>Endangered Languages:</strong> Ladin, Friulian, Romansh.<br>
    <strong>Historical Context:</strong>
    The Italic family dominated the Italian Peninsula and was crucial for the rise of the Roman Empire. Latin evolved into the Romance languages, such as Italian, Spanish, and French. While Latin is no longer spoken natively, it remains influential as the language of science, law, and the Catholic Church.<br>
    <strong>Notes:</strong> The Italic family includes the Romance languages, which evolved from Vulgar Latin. Latin was the language of the Roman Empire and continues to influence legal, religious, and scientific terms.`,
  Baltic: `<strong>Languages:</strong> Lithuanian, Latvian<br>
    <strong>Geographical Area:</strong> The Baltic region, particularly Lithuania and Latvia<br>
    <strong>Extinct Languages:</strong> Old Prussian, Curonian, Selonian, Semigallian.<br>
    <strong>Endangered Languages:</strong> None currently, but both Latvian and Lithuanian have relatively small speaker populations.<br>
    <strong>Historical Context:</strong>
    Baltic languages were historically spoken over a much larger area in Eastern Europe but diminished due to Slavic expansion. Old Prussian, once spoken in modern-day Poland, became extinct in the 17th century. Lithuanian, the most conservative Indo-European language, retains many ancient features.<br>
    <strong>Notes:</strong> The Baltic languages are considered one of the oldest and most conservative Indo-European languages. Lithuanian and Latvian retain many archaic features of the Proto-Indo-European language.`,
  Slavic: `<strong>Languages:</strong> Russian, Polish, Czech, Slovak, Ukrainian, Bulgarian, Serbian, Croatian, and others<br>
    <strong>Geographical Area:</strong> Eastern Europe, the Balkans, and parts of Central Europe<br>
    <strong>Extinct Languages:</strong> Polabian, Old Church Slavonic (as a vernacular).<br>
    <strong>Endangered Languages:</strong> Kashubian, Sorbian (Upper and Lower).<br>
    <strong>Historical Context:</strong>
    Slavic languages developed from Proto-Slavic and expanded widely through migrations. They are divided into East, West, and South Slavic branches. Historically, Old Church Slavonic was the liturgical language of the Orthodox Church and helped preserve early Slavic texts.<br>
    <strong>Notes:</strong> Slavic languages are divided into three subgroups: East Slavic (e.g., Russian), West Slavic (e.g., Polish), and South Slavic (e.g., Bulgarian). They have a rich literary tradition and have been heavily influenced by the Orthodox and Catholic churches.`,
  Lusitanian: `<strong>Languages:</strong> Ancient Lusitanian [Extinct]<br>
    <strong>Geographical Area:</strong> Western Iberian Peninsula (modern Portugal and Spain)<br>
    <strong>Extinct Languages:</strong> Lusitanian.<br>
    <strong>Endangered Languages:</strong> None, as it is fully extinct.<br>
    <strong>Historical Context:</strong>
    Lusitanian is a poorly attested language once spoken in the western Iberian Peninsula. It is debated whether it was Indo-European or pre-Indo-European. Some scholars link it with Celtic languages.<br>
    <strong>Notes:</strong> Because of the limited inscriptions and linguistic data, the classification of Lusitanian remains speculative. It holds historical significance as one of the ancient languages of Iberia.`
};

const LanguageLegend = () => {
  const [selectedFamily, setSelectedFamily] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Language Family Legend</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(languageFamilyDetails).map((family) => (
          <button
            key={family}
            onClick={() => setSelectedFamily(family)}
            className="px-3 py-1 bg-blue-200 hover:bg-blue-400 text-black rounded transition"
          >
            {family}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Language Details</h3>
        {selectedFamily ? (
          <div
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: languageFamilyDetails[selectedFamily] }}
          />
        ) : (
          <p>Select a language family to see details.</p>
        )}
      </div>
    </div>
  );
};

export default LanguageLegend;
