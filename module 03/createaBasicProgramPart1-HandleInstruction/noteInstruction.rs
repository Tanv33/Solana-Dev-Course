enum NoteInstruction {
    CreateNote {
        title: String,
        body: String,
        id: u64
    },
    UpdateNote {
        title: String,
        body: String,
        id: u64
    },
    DeleteNote {
        id: u64
    }
}

#[derive(BorshDeserialize)]
struct NoteInstructionPayload {
    id: u64,
    title: String,
    body: String
}

impl NoteInstruction {
    // Unpack inbound buffer to associated Instruction
    // The expected format for input is a Borsh serialized vector
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        // Take the first byte as the variant to
        // determine which instruction to execute
        let (&variant, rest) = input.split_first().ok_or(ProgramError::InvalidInstructionData)?;
        // Use the temporary payload struct to deserialize
        let payload = NoteInstructionPayload::try_from_slice(rest).unwrap();
        // Match the variant to determine which data struct is expected by
        // the function and return the TestStruct or an error
        Ok(match variant {
            0 => Self::CreateNote {
                title: payload.title,
                body: payload.body,
                id: payload.id
            },
            1 => Self::UpdateNote {
                title: payload.title,
                body: payload.body,
                id: payload.id
            },
            2 => Self::DeleteNote {
                id: payload.id
            },
            _ => return Err(ProgramError::InvalidInstructionData)
        })
    }
}


entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    // Call unpack to deserialize instruction_data
    let instruction = NoteInstruction::unpack(instruction_data)?;
    // Match the returned data struct to what you expect
    match instruction {
        NoteInstruction::CreateNote { title, body, id } => {
            // Execute program code to create a note
        },
        NoteInstruction::UpdateNote { title, body, id } => {
            // Execute program code to update a note
        },
        NoteInstruction::DeleteNote { id } => {
            // Execute program code to delete a note
        }
    }
}