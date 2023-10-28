const directoryPath = './example_dir'
const searchWord = "Changed"
const replaceWord = "Igor"

function searchAndReplaceInFile(filePath: string, searchWord: string, replaceWord: string) {
    const decoder = new TextDecoder('utf-8')
    const file = Deno.readFileSync(filePath)
    const fileContent = decoder.decode(file)
    const newFileContent = fileContent.replace(searchWord, replaceWord)
    
    const encoder = new TextEncoder()
    Deno.writeFileSync(filePath, encoder.encode(newFileContent))
}

function searchAndReplaceFiles(directoryPath: string, searchWord: string, replaceWord: string) {
    for (const dirEntry of Deno.readDirSync(directoryPath)) {
        const filePath = `${directoryPath}/${dirEntry.name}`
        if (dirEntry.isFile) {
            searchAndReplaceInFile(filePath, searchWord, replaceWord)
        } else if (dirEntry.isDirectory) {
            searchAndReplaceFiles(filePath, searchWord, replaceWord)
        }
    }
}

searchAndReplaceFiles(directoryPath, searchWord, replaceWord)