import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({
        data:{
            name: 'joe',
            email: 'joe@gmail.com'
        }
    })

    const pool = await prisma.pool.create({
        data:{
            title: 'Example Pool',
            code: 'Bol123',
            ownerId: user.id,

            participants:{
                create:{
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data:{
            date:'2022-11-09T02:21:11.299Z',
            fisrtTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR',
        }
    })

    await prisma.game.create({
        data:{
            date:'2022-11-09T09:29:01.299Z',
            fisrtTeamCountryCode: 'AR',
            secondTeamCountryCode: 'BR',

            guesses:{
                create:{
                    firstTeamPoints: 2,
                    secondTeamPoints: 1,

                    participant:{
                        connect:{
                            userId_poolId:{
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    })
   
}

main()